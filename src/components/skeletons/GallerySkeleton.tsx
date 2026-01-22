import { Skeleton } from "@/components/ui/skeleton";

interface GallerySkeletonProps {
  count?: number;
}

const GallerySkeleton = ({ count = 6 }: GallerySkeletonProps) => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-40 mx-auto" />
          <Skeleton className="h-1 w-20 mx-auto" />
          <Skeleton className="h-6 w-72 mx-auto" />
        </div>

        {/* Gallery grid skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[...Array(count)].map((_, i) => (
            <Skeleton 
              key={i} 
              className="aspect-square rounded-lg" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySkeleton;
