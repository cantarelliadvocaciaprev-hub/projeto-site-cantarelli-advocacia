import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content skeleton */}
          <div className="space-y-6">
            <Skeleton className="h-8 w-48 rounded-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-14 w-48" />
              <Skeleton className="h-14 w-48" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Skeleton className="h-24 w-full rounded-lg" />
              <Skeleton className="h-24 w-full rounded-lg" />
              <Skeleton className="h-24 w-full sm:col-span-2 rounded-lg" />
            </div>
          </div>

          {/* Video skeleton */}
          <Skeleton className="aspect-video w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
