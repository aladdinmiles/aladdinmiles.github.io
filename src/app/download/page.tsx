import { Metadata } from 'next';
import { Redirect } from './redirect';

export const metadata: Metadata = {
  title: 'Download',
  description:
    'We are building a magical world. The best place to meet your travel and shopping needs all at once.',
  keywords:
    'About us, About AladdinMiles, Travel for free, Travel for free KSA, Travel for free Saudi Arabia, Travel for free world wide, merchants, venues, AladdinMiles Portal, Loyalty app, loyalty saudi arabia, airlines loyalty in saudi arabia, loyalty app KSA, AladdinMiles Kingdom'
};

const DownloadApp: React.FC = () => {
  return (
    <div>
      <Redirect />
    </div>
  );
};
export default DownloadApp;
