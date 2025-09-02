import { useState, useEffect } from 'react';

function useContainerDimensions<T extends HTMLDivElement>(ref: React.RefObject<T | null>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const getDimensions = () => {
      if (!ref.current) return { width: 0, height: 0 };
      return {
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      };
    };


    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (ref.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [ref])

  return dimensions;
};

export default useContainerDimensions;