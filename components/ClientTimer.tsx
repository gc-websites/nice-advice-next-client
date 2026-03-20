'use client';

import React, { useEffect, useState } from 'react';

// Calculate seconds until next midnight
const getSecondsUntilMidnight = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); // Next midnight
  return Math.floor((midnight.getTime() - now.getTime()) / 1000);
};

export default function ClientTimer() {
  const [timeLeft, setTimeLeft] = useState(0); // init with 0 for SSR safety (hydration mismatch)
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setTimeLeft(getSecondsUntilMidnight());
    setHydrated(true);

    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!hydrated) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="flex flex-col items-center mt-2 w-full">
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-3 font-medium">
        Offer ends soon
      </p>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="text-neutral-900 dark:text-white font-bold text-xl md:text-2xl py-1 px-2 border-b-2 border-transparent bg-neutral-100 dark:bg-neutral-700 rounded min-w-[45px] text-center">
            {String(Math.floor(timeLeft / 3600)).padStart(2, '0')}
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">hrs</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-neutral-900 dark:text-white font-bold text-xl md:text-2xl py-1 px-2 border-b-2 border-transparent bg-neutral-100 dark:bg-neutral-700 rounded min-w-[45px] text-center">
            {String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0')}
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">min</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-neutral-900 dark:text-white font-bold text-xl md:text-2xl py-1 px-2 border-b-2 border-transparent bg-neutral-100 dark:bg-neutral-700 rounded min-w-[45px] text-center">
            {String(timeLeft % 60).padStart(2, '0')}
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">sec</span>
        </div>
      </div>
    </div>
  );
}
