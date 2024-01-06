import {useEffect, useRef} from "react";

export const useObserverAnimation = ({amount, classes, animateClass, threshold } : {amount: "many"| "one", classes: string, animateClass: string, threshold:number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animateClass);
          }
        });
      },
      { threshold }
    );

    if (amount === "many") {
      const elements = containerRef.current.querySelectorAll(classes);
      elements.forEach((el) => observer.observe(el));
    } else {
      const element = containerRef.current.querySelector(classes);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [amount, animateClass, classes]);

  return containerRef

}