import { cx } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cx(
        // Tremor skeleton styling
        "animate-pulse rounded-md",
        // Tremor colors
        "bg-gray-200 dark:bg-gray-800",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
