import type { FC, ComponentProps } from "react";
import { cn } from "../../utils/cn";

interface SpinnerProps extends ComponentProps<"div"> {
  size?: string;
  color?: string;
}

/**
 * Spinner animado personalizable por tamaño y color.
 */
export const Spinner: FC<SpinnerProps> = ({
  size = "size-6",
  color = "#222",
  className,
  ...props
}) => {
  const bars = Array(12).fill(0);

  return (
    <div className={cn(size)}>
      <div className={cn("relative top-1/2 left-1/2 h-[inherit] w-[inherit]")}>
        {bars.map((_, i) => (
          <div
            key={`spinner-bar-${String(i)}`}
            aria-label={`spinner-bar-${i + 1}`}
            className={cn(
              "-left-[10%] -top-[3.9%] absolute h-[8%] w-[24%] animate-spinner rounded-md",
              className,
            )}
            style={{
              animationDelay: `-${1.3 - i * 0.1}s`,
              transform: `rotate(${30 * i}deg) translate(146%)`,
              background: color,
            }}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};
