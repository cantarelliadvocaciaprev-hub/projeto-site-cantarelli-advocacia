import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
}

const ImageWithSkeleton = ({ 
  src, 
  alt, 
  className, 
  skeletonClassName,
  ...props 
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative", className)}>
      {!isLoaded && !hasError && (
        <Skeleton 
          className={cn(
            "absolute inset-0 w-full h-full",
            skeletonClassName
          )} 
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
