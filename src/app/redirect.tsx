'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const Redirect: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || !pathname) return;

    const segments = pathname.toLowerCase().split('/');
    const shouldHandle = segments.some((segment) => segment === 'app' || segment === 'auth');
    if (!shouldHandle) return;

    const host = window.location.host;
    const query = searchParams?.toString() ? `?${searchParams.toString()}` : '';
    const hash = window.location.hash ?? '';

    let scheme = 'com.aladdinmiles.amatest:/';
    if (host === 'www.aladdinmiles.com') {
      scheme = 'aladdinmiles:/';
    } else if (host === 'staging.aladdinmiles.com') {
      scheme = 'com.aladdinmiles.staging:/';
    }

    window.location.replace(`${scheme}${pathname}${query}${hash}`);
  }, [pathname, searchParams]);

  return null;
};
