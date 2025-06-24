import type { FC, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  vertical?: boolean;
  repeat?: number;
}

/**
 * Componente Marquee animado, permite scroll horizontal o vertical de elementos hijos.
 */
export const Marquee: FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
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
};
