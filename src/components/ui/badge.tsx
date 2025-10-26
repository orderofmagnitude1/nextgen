// Badge with Tremor styling and shadcn compatibility
import * as React from "react";
import {
  Badge as TremorBadge,
  badgeVariants as tremorBadgeVariants,
  type BadgeProps as TremorBadgeProps,
} from "../tremor/Badge";
import { tv, type VariantProps } from "tailwind-variants";

// Map shadcn variants to Tremor variants
const variantMap = {
  default: "default",
  secondary: "neutral",
  destructive: "error",
  outline: "neutral",
} as const;

// Extended badge variants for shadcn compatibility
const badgeVariants = tv({
  extend: tremorBadgeVariants,
  variants: {
    variant: {
      // shadcn variants
      default: tremorBadgeVariants.variants.variant.default,
      secondary: tremorBadgeVariants.variants.variant.neutral,
      destructive: tremorBadgeVariants.variants.variant.error,
      outline: [
        "bg-transparent ring-1 ring-gray-300 text-gray-900",
        "dark:ring-gray-700 dark:text-gray-100",
      ],
      // Tremor variants (also available)
      neutral: tremorBadgeVariants.variants.variant.neutral,
      success: tremorBadgeVariants.variants.variant.success,
      error: tremorBadgeVariants.variants.variant.error,
      warning: tremorBadgeVariants.variants.variant.warning,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps
  extends Omit<TremorBadgeProps, "variant">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, className, ...props }, ref) => {
    // Map shadcn variant to Tremor variant
    const tremorVariant = variant
      ? variant in variantMap
        ? variantMap[variant as keyof typeof variantMap]
        : (variant as any)
      : "default";

    return (
      <TremorBadge
        ref={ref}
        variant={tremorVariant as any}
        className={className}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
export type { BadgeProps };
