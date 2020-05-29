import React from "react";
import { useRef, useLayoutEffect } from 'react'

export const screenSize = {
    mobileS: 375,
    mobileL: 414,
    tablet: 1024,
    desktop: 1440,
};

export const device = {
    mobileS: `min-width: ${screenSize.mobileS}px`,
    mobileL: `min-width: ${screenSize.mobileL}px`,
    tablet: `min-width: ${screenSize.tablet}px`,
    desktop: `min-width: ${screenSize.desktop}px`,
};


const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
  return position;
}

export function useWindowSize() {
    const isClient = typeof window === "object";

    const getSize = React.useCallback(() => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
        };
    }, [isClient]);

    const [windowSize, setWindowSize] = React.useState(getSize);

    React.useEffect(() => {
        if (!isClient) {
            return false;
        }

        const handleResize = () => {
            setWindowSize(getSize());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isClient, getSize]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

export function useLargerThanSizes() {
    const { width } = useWindowSize();

    return React.useMemo(() => {
        return {
            desktop: width > screenSize.desktop,
            tablet: width > screenSize.tablet,
            mobileL: width > screenSize.mobileL,
            mobileS: width > screenSize.mobileS,
        };
    }, [width]);
}