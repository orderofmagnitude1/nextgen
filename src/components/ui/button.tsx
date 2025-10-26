// Tremor Button with shadcn compatibility layer
import * as React from "react";
import {
  Button as TremorButton,
  buttonVariants as tremorButtonVariants,
  type ButtonProps as TremorButtonProps,
} from "../tremor/Button";
import { tv, type VariantProps } from "tailwind-variants";

// Map shadcn variants to Tremor variants
const variantMap = {
  default: "primary",
  destructive: "destructive",
  outline: "secondary",
  secondary: "light",
  ghost: "ghost",
  link: "ghost", // No direct equivalent, using ghost
} as const;

// Extended button variants for shadcn compatibility
const buttonVariants = tv({
  extend: tremorButtonVariants,
  variants: {
    variant: {
      default: tremorButtonVariants.variants.variant.primary,
      destructive: tremorButtonVariants.variants.variant.destructive,
      outline: tremorButtonVariants.variants.variant.secondary,
      secondary: tremorButtonVariants.variants.variant.light,
      ghost: tremorButtonVariants.variants.variant.ghost,
      link: [
        "shadow-none",
        "border-transparent",
        "text-blue-600 dark:text-blue-400",
        "hover:underline hover:bg-transparent",
        "underline-offset-4",
      ],
      // Also support Tremor variants
      primary: tremorButtonVariants.variants.variant.primary,
      light: tremorButtonVariants.variants.variant.light,
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends Omit<TremorButtonProps, "variant">,
    VariantProps<typeof buttonVariants> {
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    // Map shadcn variant to Tremor variant
    const tremorVariant = variant
      ? variant in variantMap
        ? variantMap[variant as keyof typeof variantMap]
        : (variant as any)
      : "primary";

    return (
      <TremorButton
        ref={ref}
        variant={tremorVariant as any}
        className={className}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
