import { useRef, useEffect } from "react";

export const useTimeoutRef = () => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return timeoutRef;
};
