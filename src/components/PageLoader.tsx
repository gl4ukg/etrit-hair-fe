'use client';

import { useEffect, useState } from 'react';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increment % until 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#181818]">
        <p className="text-[24px] font-light tracking-[0.3em] text-white">
          LOADING <span className="tracking-normal">{progress}%</span>
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
