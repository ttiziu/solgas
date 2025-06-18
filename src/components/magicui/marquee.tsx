import { cn } from "../../lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const directionClass = vertical ? "flex-col" : "flex-row";
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        directionClass,
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => {
          const marqueeClass = vertical
            ? "animate-marquee-vertical flex-col"
            : "animate-marquee flex-row";
          const pauseClass = pauseOnHover ? "group-hover:[animation-play-state:paused]" : "";
          const reverseClass = reverse ? "[animation-direction:reverse]" : "";
          return (
            <div
              key={i}
              className={cn(
                "flex shrink-0 justify-around [gap:var(--gap)]",
                marqueeClass,
                pauseClass,
                reverseClass
              )}
            >
              {children}
            </div>
          );
        })}
    </div>
  );
}
