import { Skeleton } from "@/components/ui/skeleton";

interface CardSkeletonProps {
  variant?: "default" | "horizontal" | "team" | "blog";
}

const CardSkeleton = ({ variant = "default" }: CardSkeletonProps) => {
  if (variant === "horizontal") {
    return (
      <div className="flex gap-4 p-4 rounded-lg border border-border bg-card">
        <Skeleton className="h-20 w-20 rounded-lg flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  if (variant === "team") {
    return (
      <div className="p-6 rounded-lg border border-border bg-card text-center">
        <Skeleton className="h-32 w-32 rounded-full mx-auto mb-4" />
        <Skeleton className="h-6 w-40 mx-auto mb-2" />
        <Skeleton className="h-4 w-32 mx-auto mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
      </div>
    );
  }

  if (variant === "blog") {
    return (
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <Skeleton className="h-48 w-full" />
        <div className="p-6 space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex items-center justify-between pt-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-lg border border-border bg-card space-y-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
};

export default CardSkeleton;
