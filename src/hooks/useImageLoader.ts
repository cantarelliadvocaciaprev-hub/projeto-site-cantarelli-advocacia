import { useState, useEffect } from "react";

export const useImageLoader = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoaded, error };
};

export const useMultipleImageLoader = (sources: string[]) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    let loadedImages = 0;

    sources.forEach((src) => {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        if (mounted) {
          loadedImages++;
          setLoadedCount(loadedImages);
          if (loadedImages === sources.length) {
            setIsAllLoaded(true);
          }
        }
      };
    });

    return () => {
      mounted = false;
    };
  }, [sources]);

  return { loadedCount, isAllLoaded, progress: sources.length > 0 ? loadedCount / sources.length : 0 };
};
