'use client';
import { ContentView } from '@/app/styles';
import Image from 'next/image';
import {
  HorizontalStepProgressTracker,
  VerticalStepProgressTracker
} from '@/components/stepProgressTracker';
import { Button } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { getCheckSum } from './checkSum';

type Props = {
  steps: string[];
  activeStepTitle: string;
  content: React.ReactElement;
};

const MerchantContainer: React.FC<Props> = ({
  steps,
  activeStepTitle,
  content
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const checkSum = searchParams.get('checksum') || getCheckSum();

  if (
    typeof window !== 'undefined' &&
    !checkSum &&
    pathname.includes('sales')
  ) {
    window.location.replace('/not-found');
  }
  return (
    <ContentView className="relative">
      {/* Sticky top */}
      <div className="bg-white z-10 px-6 sm:px-8 sticky top-0 flex justify-between w-full border-y-[1px] border-gray-50 py-2 sm:py-4">
        <div className="flex items-center gap-x-2 bg-[#F0F2F5] rounded px-6 py-2">
          <Image src="/images/store.svg" width={20} height={20} alt="purse" />
          <p className="text-sm sm:text-base text-black">Merchant Contract</p>
        </div>

        <Link target="_blank" href="/contact">
          <Button
            className="rounded px-2 sm:px-4 py-2 border border-primary-500 text-primary-500 hidden sm:flex text-sm sm:text-base"
            type="button"
          >
            Contact Support
          </Button>
        </Link>
      </div>

      <div className="w-full flex flex-col items-center pb-20">
        <div className="px-6 sm:px-10 py-10 max-w-4xl w-full">
          {/* Hero */}
          <div className="space-1 text-left sm:text-center">
            <h1 className="text-3xl text-left sm:text-center text-black">
              Merchant Contract
            </h1>
            <p className="text-base text-gray-700 text-left sm:text-center">
              Fill out the information for the merchant&apos;s contract
            </p>
          </div>

          {/* Progress tracker */}
          <HorizontalStepProgressTracker
            className="hidden sm:block"
            steps={steps}
            content={content}
            activeStepTitle={activeStepTitle}
          />

          <div className="flex flex-row sm:flex-col w-full">
            {/* Progress tracker */}
            <VerticalStepProgressTracker
              className="flex sm:hidden"
              steps={steps}
              content={content}
              activeStepTitle={activeStepTitle}
            />
          </div>
        </div>
      </div>
    </ContentView>
  );
};

export default MerchantContainer;
