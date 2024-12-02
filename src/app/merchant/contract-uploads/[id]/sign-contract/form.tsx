'use client';
import { useFormik } from 'formik';
import Input from '@/components/inputs/input';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Button } from '@headlessui/react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { SignContractSchema } from '../../components/schema';
import { FiDownload } from 'react-icons/fi';
import classNames from '@/utils/classNames';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { MerchantContractDetails } from '@/types';
import useMutation from '@/hooks/useMutation';
import e from '@/constants/endpoints';
import { convertKeysToSnakeCase } from '@/utils/convertKeys';
import { downloadFileFromUrl } from '@/utils/downloadFile';
import useQuery from '@/hooks/useQuery';

type SignerDetails = {
  signerFullName: string;
  signerPosition: string;
  signerEmail: string;
  contractSignedAt: string;
};

const initialValues = (data?: MerchantContractDetails): SignerDetails => ({
  signerFullName: data?.signerFullName || '',
  signerPosition: data?.signerPosition || '',
  signerEmail: data?.signerEmail || '',
  contractSignedAt: data?.contractSignedAt
    ? new Date(data.contractSignedAt).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10)
});

const Downloaded: React.FC = () => (
  <div className="w-full flex items-center justify-center">
    <div className="fixed top-10 z-50">
      <div className="bg-azureBlue w-max text-white rounded py-2 px-4 flex gap-2 items-center justify-center">
        <FiDownload className="w-4 h-4 stroke-2" />
        <p>Contract Downloaded</p>
      </div>
    </div>
  </div>
);

const SignContractForm: React.FC = () => {
  const { id } = useParams();
  const pathname = usePathname();
  const { back, push } = useRouter();
  const [downloaded, setDownloaded] = useState<boolean>(false);
  const { isLoading, data } = useQuery<MerchantContractDetails>(
    e.CONTRACT_UPLOADS(id as string)
  );

  const downloadContractPdf = (url: string): void => {
    downloadFileFromUrl({
      data: url,
      fileName: 'Aladdin Miles Document.pdf',
      onSuccess: () => {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 60000);
      },
      onError: (message) => {
        toast(message, { type: 'error' });
      }
    });
  };

  const { action: generateContractPdf, state: generateContractPdfState } =
    useMutation<string>({
      endpoint: e.GENERATE_CONTRACT_PDF(id as string),
      method: 'post',
      onSuccess: (success) => {
        downloadContractPdf(success?.data!);
      },
      onError: (error) => {
        toast(error?.message, { type: 'error' });
      }
    });

  const { action: signContract, state: signContractState } =
    useMutation<MerchantContractDetails>({
      endpoint: e.CONTRACT_UPLOADS(id as string),
      method: 'put',
      options: { headers: { 'Content-Type': 'application/json' } },
      onSuccess: (success) => {
        generateContractPdf();
      },
      onError: (error) => {
        toast(error?.message, { type: 'error' });
      }
    });

  const formik = useFormik<SignerDetails>({
    enableReinitialize: true,
    initialValues: initialValues(data),
    validationSchema: SignContractSchema,

    onSubmit: (values) => {
      const payload = {
        ...values,
        contractSignedAt: data?.contractSignedAt ?? new Date().toISOString()
      };
      signContract(convertKeysToSnakeCase(payload));
    }
  });

  const goToNextStep = () => {
    push(pathname.replace('sign-contract', 'upload-signed-contract'));
  };

  const isDisabled =
    isLoading ||
    Object.keys(formik.errors).length !== 0 ||
    (!data?.contractSignedAt &&
      !signContractState.isSuccess &&
      !downloaded &&
      !generateContractPdfState.isSuccess);

  const disableDownload =
    Object.keys(formik.errors).length !== 0 &&
    formik.touched.signerFullName &&
    formik.touched.signerPosition &&
    formik.touched.signerEmail;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className="px-0 sm:px-8 space-y-6">
          <Input
            id="signerFullName"
            name="signerFullName"
            type="text"
            required
            autoFocus
            label="Full Name"
            placeholder="Enter your full name"
            value={formik.values.signerFullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched.signerFullName &&
              Boolean(formik.errors.signerFullName)
            }
            errorMsg={formik.errors.signerFullName}
          />

          <Input
            id="signerPosition"
            name="signerPosition"
            type="text"
            required
            label="Position"
            placeholder="Enter your position"
            value={formik.values.signerPosition}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched.signerPosition &&
              Boolean(formik.errors.signerPosition)
            }
            errorMsg={formik.errors.signerPosition}
          />

          <Input
            id="signerEmail"
            name="signerEmail"
            type="email"
            required
            label="Email Address"
            placeholder="Enter your email address"
            value={formik.values.signerEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched.signerEmail && Boolean(formik.errors.signerEmail)
            }
            errorMsg={formik.errors.signerEmail}
          />

          <Input
            id="contractSignedAt"
            name="contractSignedAt"
            type="date"
            label="Date"
            placeholder="Enter today's date"
            value={formik.values.contractSignedAt}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isDisabled
            isInvalid={
              formik.touched.contractSignedAt &&
              Boolean(formik.errors.contractSignedAt)
            }
            errorMsg={formik.errors.contractSignedAt}
          />

          <div className="space-y-1">
            <label className="text-sm text-gray-700" htmlFor="downloadPDF">
              Contract PDF
              <sup className="text-primary-500 pl-1">*</sup>
            </label>

            <button
              id="downloadPDF"
              className={classNames(
                disableDownload ? 'border-error-600' : 'border-gray-100',
                'p-6 rounded-md w-full border flex flex-col items-center justify-center gap-2'
              )}
              type="submit"
            >
              <div className="p-4 w-min bg-primary-25 rounded-full flex items-center justify-center">
                <FiDownload className="w-5 h-5 text-primary-500" />
              </div>
              <div className="space-1">
                <h3 className="text-base text-center">Download Contract PDF</h3>
                <p className="text-sm text-[#3D414D] text-center">
                  Download the pdf to upload a signed copy
                </p>
              </div>
            </button>
            {disableDownload && (
              <p
                className={classNames(
                  isDisabled ? 'text-error-600' : 'text-gray-600',
                  'text-sm pt-1.5'
                )}
              >
                {`${Object.values(formik.errors)[0]} above`}
              </p>
            )}
          </div>

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
              type="button"
              onClick={goToNextStep}
            >
              Continue
              <IoArrowForward className="w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
          </div>
        </div>
      </form>
      {downloaded ? <Downloaded /> : null}
    </>
  );
};

export default SignContractForm;
