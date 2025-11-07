'use client';

import { useEffect, useState } from 'react';
import ScissorLoader from './ScissorLoader';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#181818]">
        <ScissorLoader size={120} color="#ffffff" label="Styling your look…" />
      </div>
    );
  }

  return <>{children}</>;
}
