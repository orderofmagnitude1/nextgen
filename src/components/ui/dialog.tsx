// Dialog with Tremor styling and shadcn API
import * as React from "react";
import {
  Dialog as TremorDialog,
  DialogTrigger as TremorDialogTrigger,
  DialogClose as TremorDialogClose,
  DialogContent as TremorDialogContent,
  DialogHeader as TremorDialogHeader,
  DialogTitle as TremorDialogTitle,
  DialogDescription as TremorDialogDescription,
  DialogFooter as TremorDialogFooter,
} from "../tremor/Dialog";

// Re-export Tremor Dialog components with shadcn aliases
const Dialog = TremorDialog;
const DialogTrigger = TremorDialogTrigger;
const DialogClose = TremorDialogClose;
const DialogContent = TremorDialogContent;
const DialogHeader = TremorDialogHeader;
const DialogTitle = TremorDialogTitle;
const DialogDescription = TremorDialogDescription;
const DialogFooter = TremorDialogFooter;

// Additional shadcn components that Tremor includes in Content
const DialogPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const DialogOverlay = () => null; // Tremor handles overlay internally

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
