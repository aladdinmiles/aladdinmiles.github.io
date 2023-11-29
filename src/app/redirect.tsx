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
    window.location.replace(`aladdinmiles:/${path}`);
  }
  return <></>;
};
