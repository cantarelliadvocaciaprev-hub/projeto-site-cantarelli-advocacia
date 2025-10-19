import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export function useCarouselCenter(api: CarouselApi | undefined) {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCenterIndex = () => {
      const selectedIndex = api.selectedScrollSnap();
      setCenterIndex(selectedIndex);
    };

    // Initial update
    updateCenterIndex();

    // Listen for changes
    api.on("select", updateCenterIndex);
    api.on("reInit", updateCenterIndex);

    return () => {
      api.off("select", updateCenterIndex);
      api.off("reInit", updateCenterIndex);
    };
  }, [api]);

  return centerIndex;
}
