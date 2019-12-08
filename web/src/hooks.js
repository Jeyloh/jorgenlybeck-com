import React from "react";

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