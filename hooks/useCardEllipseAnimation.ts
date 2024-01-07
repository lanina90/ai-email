import {useEffect, useRef, useState} from "react";


export const useCardEllipseAnimation = () => {
  const [translateX, setTranslateX] = useState(0);
  const componentRef = useRef <HTMLDivElement>(null);
  const isComponentVisible = useRef(false);
  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (isComponentVisible.current) {
      if (currentScrollTop > lastScrollTop.current) {
        setTranslateX((prevTranslateX) => Math.min(prevTranslateX + 1, 90));
      } else {
        setTranslateX((prevTranslateX) => Math.max(prevTranslateX - 1, 0));
      }
    }

    lastScrollTop.current = currentScrollTop;
  };

  useEffect(() => {
    const currentRef = componentRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isComponentVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
          setTranslateX(0);
        }
      });
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const transformStyle = {
    transform: `translate3d(${translateX}vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
  };
  return {transformStyle, componentRef}
}