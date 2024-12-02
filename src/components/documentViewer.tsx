import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  DialogTitle,
  Dialog,
  DialogPanel,
  DialogBackdrop,
  Button
} from '@headlessui/react';
import { IoClose } from 'react-icons/io5';

interface DocumentViewerProps {
  file: File;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ file }) => {
  const [content, setContent] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const type = file.type.split('/')[0];

  // useEffect to trigger content handling whenever the file or type changes
  useEffect(() => {
    if (!file) return;
    setContent(URL.createObjectURL(file));
  }, [file]);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="text-sm sm:text-base text-azureBlue"
        type="button"
      >
        {`View ${
          file.type.includes('application')
            ? 'Document'
            : file.type.split('/')[0]
        }`}
      </button>

      <Dialog open={isModalOpen} onClose={closeModal} role="alertdialog">
        <DialogBackdrop
          transition
          className="fixed z-20 inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0 h-full"
        />

        <div className="fixed inset-x-0 top-24 flex w-screen items-center justify-center p-6 z-40">
          <DialogPanel className="w-full max-w-lg space-y-6 rounded-2xl shadow-lg bg-white p-6 relative">
            <Button
              className="absolute right-4 top-4 p-1"
              type="button"
              onClick={closeModal}
            >
              <IoClose className="w-6 h-6 stroke-1 text-black" />
            </Button>
            <DialogTitle className="text-xl font-bold mb-4">
              Document Preview
            </DialogTitle>

            {/* Document preview area */}
            <div>
              {type === 'application' && (
                <iframe
                  src={content}
                  className="w-full h-full min-h-[60vh]"
                  title="PDF Preview"
                />
              )}

              {type === 'image' && (
                <Image
                  src={content}
                  alt="Image Preview"
                  width={400}
                  height={500}
                  className="w-full max-h-[500px]"
                />
              )}
              {type === 'video' && (
                <video
                  src={content}
                  title="Video Preview"
                  muted
                  className="w-full max-h-[500px]"
                />
              )}
              {!type && <p>No document selected for preview.</p>}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default DocumentViewer;
