import {RefObject, useCallback, useEffect, useRef} from "react";

type RefType = ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement>;


export const useCombinedRefs = (...refs: RefType[]) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const setRefs = useCallback((node: HTMLDivElement | null) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    });
  }, [refs]);

  return setRefs;
};