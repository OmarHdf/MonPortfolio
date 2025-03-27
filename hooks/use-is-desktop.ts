'use client';

import { useEffect, useState } from 'react';

export default function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setIsDesktop(mq.matches);
    update(); // initial check
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [breakpoint]);

  return isDesktop;
}
