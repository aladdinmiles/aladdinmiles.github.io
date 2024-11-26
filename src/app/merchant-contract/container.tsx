import { ContentView } from '@/app/styles';
import { OutlinedButton } from '@/components/buttons';
import Image from 'next/image';
import {
  HorizontalStepProgressTracker,
  VerticalStepProgressTracker
} from '@/components/stepProgressTracker';
import { steps } from '@/constants/merchantContract';

type Props = { activeStepTitle: string; content: React.ReactElement };

const MerchantContainer: React.FC<Props> = ({ activeStepTitle, content }) => {
  return (
    <ContentView className="relative">
      {/* Sticky top */}
      <div className="bg-white z-10 px-6 sm:px-8 sticky top-0 flex justify-between w-full border-y-[1px] py-4">
        <div className="flex items-center gap-x-2 bg-[#F0F2F5] rounded px-6 py-2">
          <Image src="/images/store.svg" width={20} height={20} alt="purse" />
          <p>Merchant Contract</p>
        </div>

        <OutlinedButton
          className="!w-auto !h-auto !px-4 !py-2 !hidden sm:!flex"
          href="/contact"
        >
          Contact Support
        </OutlinedButton>
      </div>

      <div className="w-full flex flex-col items-center pb-20">
        <div className="px-6 sm:px-10 py-10 max-w-3xl w-full">
          {/* Hero */}
          <div className="space-1 text-left sm:text-center">
            <h1 className="text-3xl text-left sm:text-center">
              Merchant Contract
            </h1>
            <p className="text-base text-[#3D414D] text-left sm:text-center">
              Fill out the information for the merchant&apos;s contract
            </p>
          </div>

          {/* Progress tracker */}
          <HorizontalStepProgressTracker
            className="hidden sm:block"
            steps={steps.salesFlow}
            content={content}
            activeStepTitle={activeStepTitle}
          />

          <div className="flex flex-row sm:flex-col w-full">
            {/* Progress tracker */}
            <VerticalStepProgressTracker
              className="flex sm:hidden"
              steps={steps.salesFlow}
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
