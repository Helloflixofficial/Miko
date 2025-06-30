import { useEffect, useRef, useState } from "react";

export const useInterSectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const target = targetRef.current;
    if (target) {
      observer.observe(target);
      return () => observer.disconnect();
    }
  }, [options]);

  return { targetRef, isIntersecting };
};
