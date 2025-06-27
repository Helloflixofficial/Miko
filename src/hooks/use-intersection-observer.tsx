import { useEffect, useRef, useState } from "react";
export const useIntersectionObserver = (options?: IntersectionObserver) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInteracting(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
      return () => observer.disconnect();
    }
  }, [options]);
  return { targetRef, isInteracting };
};
