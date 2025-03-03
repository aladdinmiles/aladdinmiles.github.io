import { Metadata } from 'next';
import MerchantContainer from '../../components/container';
import { steps } from '@/constants/merchantContract';
import MerchantDetailsForm from '../../components/merchantDetailsForm';

export const metadata: Metadata = {
  title: 'Edit Merchant Contract | Details',
  description:
    'We are building a magical world. The best place to meet your travel and shopping needs all at once.',
  keywords:
    'About us, About AladdinMiles, Travel for free, Travel for free KSA, Travel for free Saudi Arabia, Travel for free world wide, merchants, venues, AladdinMiles Portal, Loyalty app, loyalty saudi arabia, airlines loyalty in saudi arabia, loyalty app KSA, AladdinMiles Kingdom'
};

const MerchantDetails: React.FC = () => {
  return (
    <MerchantContainer
      steps={steps.merchantFlow}
      activeStepTitle="Merchant Details"
      content={<MerchantDetailsForm />}
    />
  );
};

export default MerchantDetails;
