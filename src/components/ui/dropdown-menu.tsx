// Dropdown Menu with Tremor components
import * as React from "react";
import {
  DropdownMenu as TremorDropdownMenu,
  DropdownMenuTrigger as TremorDropdownMenuTrigger,
  DropdownMenuContent as TremorDropdownMenuContent,
  DropdownMenuItem as TremorDropdownMenuItem,
  DropdownMenuCheckboxItem as TremorDropdownMenuCheckboxItem,
  DropdownMenuRadioItem as TremorDropdownMenuRadioItem,
  DropdownMenuLabel as TremorDropdownMenuLabel,
  DropdownMenuSeparator as TremorDropdownMenuSeparator,
  DropdownMenuGroup as TremorDropdownMenuGroup,
  DropdownMenuSubMenu as TremorDropdownMenuSubMenu,
  DropdownMenuSubMenuContent as TremorDropdownMenuSubMenuContent,
  DropdownMenuSubMenuTrigger as TremorDropdownMenuSubMenuTrigger,
  DropdownMenuRadioGroup as TremorDropdownMenuRadioGroup,
} from "../tremor/DropdownMenu";
import { cx } from "@/lib/utils";

// Re-export all Tremor DropdownMenu components with shadcn aliases
const DropdownMenu = TremorDropdownMenu;
const DropdownMenuTrigger = TremorDropdownMenuTrigger;
const DropdownMenuContent = TremorDropdownMenuContent;
const DropdownMenuItem = TremorDropdownMenuItem;
const DropdownMenuCheckboxItem = TremorDropdownMenuCheckboxItem;
const DropdownMenuRadioItem = TremorDropdownMenuRadioItem;
const DropdownMenuLabel = TremorDropdownMenuLabel;
const DropdownMenuSeparator = TremorDropdownMenuSeparator;
const DropdownMenuGroup = TremorDropdownMenuGroup;
const DropdownMenuSub = TremorDropdownMenuSubMenu;
const DropdownMenuSubContent = TremorDropdownMenuSubMenuContent;
const DropdownMenuSubTrigger = TremorDropdownMenuSubMenuTrigger;
const DropdownMenuRadioGroup = TremorDropdownMenuRadioGroup;

// DropdownMenuShortcut - not in Tremor, create compatible version
const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cx("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// DropdownMenuPortal - compatibility shim (Tremor handles portals internally)
const DropdownMenuPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
