import React, { FocusEvent, useCallback } from 'react';
import classNames from '@/utils/classNames';
import { useDropzone } from 'react-dropzone';
import { HiOutlineTrash } from 'react-icons/hi2';
import { LuDownloadCloud, LuFile } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { Button } from '@headlessui/react';
import formatBytes from '@/utils/formatBytes';
import DocumentViewer from './documentViewer';

type UploadProps = {
  id: string;
  label?: string;
  files?: { file: File; url: string | null }[];
  accept: string;
  multiple?: boolean;
  required?: boolean;
  onDelete?: (file: { file: File; url: string | null }) => void;
  onChange: (files: { file: File; url: string | null }[]) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
  isDisabled?: boolean;
  errorMsg?: string;
  tip?: string;
};

export function DragNDrop({
  id,
  label = '',
  accept,
  files = [],
  onDelete = () => {},
  onChange,
  onBlur,
  isDisabled = false,
  required,
  isInvalid,
  errorMsg,
  tip,
  multiple = false
}: UploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!multiple && acceptedFiles.length > 1) {
        toast('Select a single file', { type: 'error' });
      } else {
        const files = acceptedFiles.map((file) => ({ file, url: null }));

        onChange(files);
      }
    },
    [multiple, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const filesToPreview = files.filter((file) => file !== null);

  return (
    <>
      {filesToPreview.length <= 0 ? (
        <div className="w-full" {...getRootProps()}>
          <label className="text-sm text-gray-700" htmlFor={id}>
            {label}
            {required && <sup className="text-primary-500 pl-1">*</sup>}
          </label>

          <div
            className={classNames(
              isInvalid ? 'border-error-600' : 'border-gray-900/25',
              'mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10'
            )}
          >
            <div className="text-center flex flex-col items-center justify-center">
              <div className="p-4 w-min bg-gray-50 rounded-full flex items-center justify-center">
                <LuDownloadCloud className="w-5 h-5 text-graay-500" />
              </div>

              <div className="mt-4 flex text-sm leading-6 text-gray-800">
                <input
                  id={id}
                  name={id}
                  multiple={multiple}
                  disabled={isDisabled}
                  className="sr-only"
                  accept={accept}
                  onBlur={onBlur}
                  {...getInputProps()}
                />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <div>
                    <p>
                      <span className="text-royalBlue cursor-pointer font-medium">
                        Click to upload
                      </span>{' '}
                      or drag and drop
                    </p>
                    <p className="text-xs leading-5 text-gray-600">
                      PDF (max. 10MB)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {(tip || isInvalid) && (
            <p
              className={classNames(
                isInvalid ? 'text-error-600' : 'text-gray-600',
                'text-sm pt-1.5'
              )}
            >
              {isInvalid ? errorMsg : tip}
            </p>
          )}
        </div>
      ) : null}

      {filesToPreview.length > 0 ? (
        <div>
          <label className="text-sm text-gray-700" htmlFor={id}>
            {label}
            {required && <sup className="text-primary-500 pl-1">*</sup>}
          </label>
          <FilesPreview files={filesToPreview} onDelete={onDelete} />
        </div>
      ) : null}
    </>
  );
}

const FilesPreview = ({
  files = [],
  onDelete = () => {}
}: {
  files: UploadProps['files'];
  onDelete: UploadProps['onDelete'];
}) => {
  return (
    <div className="mt-2 space-y-4">
      {files.map((file, index) => {
        return (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 border border-gray-100 rounded-lg flex w-full"
          >
            <div className="sm:w-[10%] h-8 sm:h-12">
              <div className="p-2 sm:p-4 w-min bg-secondary-50 rounded-full flex items-center justify-center">
                <LuFile className="w-4 sm:w-5 h-4 sm:h-5 text-azureBlue" />
              </div>
            </div>

            <div className="w-[90%] pl-2 sm:pl-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-sm sm:text-base line-clamp-2 max-w-[80%]">
                  {file.file.name}
                </h2>

                <Button
                  onClick={() => {
                    onDelete(file);
                  }}
                  type="button"
                >
                  <HiOutlineTrash className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
                </Button>
              </div>

              <p className="text-sm sm:text-base text-gray-600">
                {formatBytes(file.file.size)}
              </p>

              <DocumentViewer file={file.file} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
