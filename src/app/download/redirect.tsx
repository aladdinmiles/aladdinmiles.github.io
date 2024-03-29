'use client';
import { detectOS } from '@/utils/detectOS';

export const Redirect: React.FC = () => {
  const os = detectOS();
  if (typeof window != 'undefined') {
    if (os == 'iPad' || os == 'iOS' || os == 'Mac OS') {
      window.location.replace(
        'https://apps.apple.com/app/aladdin-miles-%D8%A7%D9%85%D9%8A%D8%A7%D9%84-%D8%B9%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%D9%8A%D9%86/id1503894088'
      );
    } else {
      window.location.replace(
        'https://play.google.com/store/apps/details?id=com.aladdinmiles.customer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
      );
    }
  }
  return <div></div>;
};
