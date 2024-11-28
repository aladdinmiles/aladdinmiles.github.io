import { Metadata } from 'next';
import StartContractForm from './form';
import MerchantContainer from '../../../components/container';
import { steps } from '@/constants/merchantContract';

export const metadata: Metadata = {
  title: 'Merchant Contract | Start Contract',
  description:
    'We are building a magical world. The best place to meet your travel and shopping needs all at once.',
  keywords:
    'About us, About AladdinMiles, Travel for free, Travel for free KSA, Travel for free Saudi Arabia, Travel for free world wide, merchants, venues, AladdinMiles Portal, Loyalty app, loyalty saudi arabia, airlines loyalty in saudi arabia, loyalty app KSA, AladdinMiles Kingdom'
};

const StartContract: React.FC = () => {
  return (
    <MerchantContainer
      steps={steps.salesFlow}
      activeStepTitle="AladdinMiles Percentage"
      content={<StartContractForm />}
    />
  );
};

export default StartContract;
