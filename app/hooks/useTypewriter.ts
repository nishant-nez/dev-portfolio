"use client";

import { useEffect, useMemo, useState } from "react";

export function useTypewriter(values: string[], speed = 70, pause = 1400) {
  const [valueIndex, setValueIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentValue = useMemo(() => values[valueIndex % values.length] ?? "", [valueIndex, values]);

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentValue.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setIsDeleting(true);
          }
          return;
        }

        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          return;
        }

        setIsDeleting(false);
        setValueIndex((prev) => prev + 1);
      },
      isDeleting ? Math.max(28, speed / 2) : charIndex === currentValue.length ? pause : speed,
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, currentValue.length, isDeleting, pause, speed]);

  return currentValue.slice(0, charIndex);
}
