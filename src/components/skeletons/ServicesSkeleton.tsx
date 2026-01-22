import { Skeleton } from "@/components/ui/skeleton";

const ServicesSkeleton = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-1 w-20 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Primary services skeleton */}
        <div className="mb-16">
          <Skeleton className="h-8 w-48 mx-auto mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-background">
                <Skeleton className="h-12 w-12 rounded-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>

        {/* Secondary services skeleton */}
        <div>
          <Skeleton className="h-8 w-40 mx-auto mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="p-4 rounded-lg border border-border bg-background">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSkeleton;
