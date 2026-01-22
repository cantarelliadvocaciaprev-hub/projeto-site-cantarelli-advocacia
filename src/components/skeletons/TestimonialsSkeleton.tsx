import { Skeleton } from "@/components/ui/skeleton";

const TestimonialsSkeleton = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-48 mx-auto" />
          <Skeleton className="h-1 w-20 mx-auto" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>

        {/* Testimonials grid skeleton */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-6 rounded-lg border border-border bg-card">
              <Skeleton className="h-8 w-8 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="h-4 w-4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Skeleton className="h-10 w-56" />
          <Skeleton className="h-10 w-44" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSkeleton;
