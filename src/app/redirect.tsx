'use client';
import { usePathname } from 'next/navigation';

export const Redirect: React.FC = () => {
  const path = usePathname();

  if (
    typeof window != 'undefined' &&
    path
      .toLowerCase()
      .split('/')
      .some((p) => 'app' == p || 'auth' == p)
  ) {
    if (window.location.host == 'www.aladdinmiles.com') {
      window.location.replace(`aladdinmiles:/${path}`);
    } else if (window.location.host == 'staging.aladdinmiles.com') {
      window.location.replace(`com.aladdinmiles.staging:/${path}`);
    } else {
      window.location.replace(`com.aladdinmiles.amatest:/${path}`);
    }
  }
  return <></>;
};
