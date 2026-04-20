"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Reset scroll on route change (Lenis + App Router)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <ReactLenis
      root
      options={{
        duration: 0.7,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        wheelMultiplier: 0.6,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
