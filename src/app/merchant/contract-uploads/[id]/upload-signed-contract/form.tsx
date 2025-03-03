'use client';
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@headlessui/react';
import { IoArrowBack, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { PiArrowCounterClockwiseBold } from 'react-icons/pi';
import { UploadSignedContractSchema } from '../../components/schema';
import { DragNDrop } from '@/components/upload';
import { useEffect, useState } from 'react';
import SuccessState from '@/components/successState';
import { MerchantContractDetails } from '@/types';
import { toast } from 'react-toastify';
import useMutation from '@/hooks/useMutation';
import e from '@/constants/endpoints';
import useQuery from '@/hooks/useQuery';
import { getFileInfoFromUrl } from '@/utils/downloadFile';
import { convertKeysToSnakeCase } from '@/utils/convertKeys';

type UploadSignedContractDetails = {
  files: { file: File; url: string | null }[];
};

const initialValues: UploadSignedContractDetails = {
  files: []
};

const UploadSignedContractForm: React.FC = () => {
  const { id } = useParams();
  const { back } = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const [undoDelete, setUndoDelete] = useState<boolean>(false);
  const { isLoading, data } = useQuery<MerchantContractDetails>(
    e.CONTRACT_UPLOADS(id as string)
  );

  const { action: uploadSignedContract, state: uploadSignedContractState } =
    useMutation<FormData, MerchantContractDetails>({
      endpoint: e.UPLOAD_SIGNED_CONTRACT_PDF(id as string),
      method: 'put',
      options: { headers: { 'Content-Type': 'multipart/form-data' } },
      onSuccess: async (success) => {
        fetchFileInfo(success?.data?.contractMedia?.mediaUrl!);
      },
      onError: (error) => {
        toast(error?.message, { type: 'error' });
        formik.setFieldValue('files', []);
      }
    });

  const { action: updateSignContract, state: updateSignContractState } =
    useMutation<{ contractSignedAt: string }, MerchantContractDetails>({
      endpoint: e.CONTRACT_UPLOADS(id as string),
      method: 'put',
      options: { headers: { 'Content-Type': 'application/json' } },
      onSuccess: (success) => {
        setShow(true);
      },
      onError: (error) => {
        toast(error?.message, { type: 'error' });
      }
    });

  const formik = useFormik<UploadSignedContractDetails>({
    initialValues,
    validationSchema: UploadSignedContractSchema,
    onSubmit: (values) => {
      updateSignContract(
        convertKeysToSnakeCase({ contractSignedAt: new Date().toISOString() })
      );
    }
  });

  useEffect(() => {
    if (data?.contractSignedAt && data?.contractMedia && !undoDelete) {
      fetchFileInfo(data?.contractMedia?.mediaUrl!);
    }
  }, [data?.contractSignedAt, data?.contractMedia, undoDelete]);

  const fetchFileInfo = async (url: string) => {
    const file = await getFileInfoFromUrl(
      url,
      'application/pdf',
      'Aladdin Miles Document.pdf'
    );

    if (file) {
      formik.setFieldValue('files', [{ file, url }]);
    }
  };

  const handleDeleteSignedContract = (
    file: UploadSignedContractDetails['files'][number]
  ) => {
    const filteredFiles = formik.values.files.filter((f) => f.url !== file.url);
    formik.setFieldValue('files', filteredFiles);
    setUndoDelete(true);
  };

  const handleUploadSignedContract = (
    files: UploadSignedContractDetails['files']
  ) => {
    const fileToUpload = files[0].file;
    const fileType = fileToUpload.type.split('/')[1];
    const maxFileSize = 1024 * 1024 * 10;

    if (fileType !== 'pdf') {
      toast('File must be a pdf', { type: 'error' });
    } else if (fileToUpload.size > maxFileSize) {
      toast('File size must not be greater than 10MB', { type: 'error' });
    } else {
      formik.setFieldValue('files', files);
      const fileToUpload = files[0].file;
      const formData = new FormData();
      formData.append('contract_doc', fileToUpload);

      uploadSignedContract(formData);
    }
  };

  const handleUndoDelete = () => {
    setUndoDelete(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  const isDisabled =
    isLoading ||
    updateSignContractState.isLoading ||
    uploadSignedContractState.isLoading ||
    !uploadSignedContractState.isSuccess ||
    Object.keys(formik.errors).length !== 0;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className="px-0 sm:px-8 space-y-4">
          <DragNDrop
            id="files"
            label="Signed Contract"
            accept="application/pdf"
            required
            files={formik.values.files}
            onDelete={handleDeleteSignedContract}
            onChange={handleUploadSignedContract}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.files && Boolean(formik.errors.files)}
            isDisabled={uploadSignedContractState.isLoading}
            isUploading={uploadSignedContractState.isLoading}
            errorMsg={
              Array.isArray(formik.errors.files)
                ? formik.errors.files.join(', ')
                : formik.errors.files
            }
          />

          {(data?.contractSignedAt ||
            uploadSignedContractState.data?.contractSignedAt) &&
          data?.contractMedia &&
          !uploadSignedContractState.isSuccess &&
          undoDelete ? (
            <div className="w-full flex items-center justify-end">
              <Button
                onClick={handleUndoDelete}
                type="button"
                className="bg-azureBlue w-max text-white rounded py-1 px-2 flex gap-1 items-center justify-center"
              >
                <PiArrowCounterClockwiseBold className="w-3 h-3 stroke-2" />
                <p className="text-sm">Undo</p>
              </Button>
            </div>
          ) : null}

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-10">
            <Button
              className="w-full sm:w-auto bg-gray-25 hover:bg-gray-100 text-primary-500 px-4 sm:px-6 py-2 sm:py-4 rounded-md flex items-center justify-center gap-1 sm:gap-2"
              type="button"
              onClick={back}
            >
              <IoArrowBack className="w-4 sm:w-5 h-4 sm:h-5" />
              Go Back
            </Button>
            <Button
              className="w-full sm:w-auto disabled:opacity-30 px-4 sm:px-6 py-2 sm:py-4 text-white bg-primary-500 hover:bg-primary-600 rounded-md flex items-center justify-center gap-1 sm:gap-2"
              disabled={isDisabled}
              type="submit"
            >
              Done
              <IoCheckmarkCircleOutline className="w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
          </div>
        </div>
      </form>

      <SuccessState
        isOpen={show}
        onClose={handleClose}
        title="Signed Contract Received"
        message="We have received your signed contract and will email you a copy."
      />
    </>
  );
};

export default UploadSignedContractForm;
