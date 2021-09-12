import { MutableRefObject, useCallback, useEffect, useRef } from "react";

export function useOutsideClick(
  ref: MutableRefObject<HTMLElement | null>,
  handler: (e: MouseEvent) => any
): void {
  const savedHandler = useRef(handler);

  const memoizedCallback = useCallback(
    (e: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(e.target as Element)) {
        savedHandler.current(e);
      }
    },
    [ref]
  );

  useEffect(() => {
    savedHandler.current = handler;
  });

  useEffect(() => {
    document.addEventListener("click", memoizedCallback, true);

    return () => {
      document.removeEventListener("click", memoizedCallback, true);
    };
  }, [ref, handler, memoizedCallback]);
}
