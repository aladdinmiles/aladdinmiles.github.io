'use client';

import { useEffect } from 'react';
import { Button } from '@/components/buttons';
import { ContentView, MultiStyleText, Page404, RaleText } from './styles';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console with sanitized information
    // In production, this should be sent to a monitoring service
    console.error(
      'Application error occurred:',
      error.digest || 'Unknown error'
    );
  }, [error]);

  return (
    <ContentView>
      <Page404>
        <div>
          <MultiStyleText>Oops! Something went wrong.</MultiStyleText>
          <RaleText>
            We encountered an unexpected error. Please try again or return to
            the home page.
          </RaleText>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Button onClick={() => reset()}>Try Again</Button>
            <Button href="/">Back To Home</Button>
          </div>
        </div>
      </Page404>
    </ContentView>
  );
}
