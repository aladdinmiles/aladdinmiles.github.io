import {
  Description,
  DialogTitle,
  Dialog,
  DialogPanel,
  DialogBackdrop,
  Button
} from '@headlessui/react';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FiCheck } from 'react-icons/fi';

type Props = {
  title: string;
  message: string;
  isOpen: boolean;
  onClose?: () => void;
};

const SuccessState: React.FC<Props> = ({ title, message, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={() => {}} role="alertdialog">
      <DialogBackdrop
        transition
        className="fixed z-20 inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0 h-full"
      />
      <div className="fixed inset-x-0 top-24 flex w-screen items-center justify-center p-6 z-40">
        <DialogPanel className="max-w-lg space-y-6 rounded-2xl shadow-lg bg-white p-6 relative">
          {typeof onClose === 'function' ? (
            <Button
              className="absolute right-4 top-4 p-1"
              type="button"
              onClick={onClose}
            >
              <IoClose className="w-6 h-6 stroke-1" />
            </Button>
          ) : null}
          <div className="flex items-center justify-center w-full pt-4">
            <div className="p-4 w-min bg-success-50 rounded-full flex items-center justify-center">
              <FiCheck className="w-10 h-10 text-success-500" />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-1 sm:gap-2 pb-8 sm:pb-10">
              <DialogTitle className="text-base sm:text-lg md:text-xl font-medium text-center text-black">
                {title}
              </DialogTitle>

              <Description className="text-xs sm:text-sm md:text-base text-gray-600 font-light text-center">
                {message}
              </Description>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default SuccessState;
