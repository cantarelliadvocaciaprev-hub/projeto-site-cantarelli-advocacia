import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
  enableLazyLoad?: boolean;
}

const ImageWithSkeleton = ({ 
  src, 
  alt, 
  className, 
  skeletonClassName,
  enableLazyLoad = true,
  ...props 
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!enableLazyLoad);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableLazyLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // Start loading 100px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [enableLazyLoad]);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {(!isLoaded || !isInView) && !hasError && (
        <Skeleton 
          className={cn(
            "absolute inset-0 w-full h-full",
            skeletonClassName
          )} 
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full h-full transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;
