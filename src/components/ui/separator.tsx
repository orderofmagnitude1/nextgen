// Separator with Tremor Divider styling
import * as React from "react";
import { cx } from "@/lib/utils";

interface SeparatorProps extends React.ComponentPropsWithoutRef<"hr"> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        data-slot="separator"
        aria-orientation={orientation}
        role={decorative ? "none" : "separator"}
        className={cx(
          // Tremor Divider base styling
          "border-none shrink-0",
          // border color
          "bg-gray-200 dark:bg-gray-800",
          // orientation
          orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
          className,
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator };
