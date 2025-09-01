"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/Dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

type GlobalLoginModalProps<T extends Record<string, any>> = {
  open: boolean;
  onClose: () => void;
  component: React.ElementType;
  componentProps?: T;
};

export default function GlobalModal<T extends Record<string, any>>({
  open,
  onClose,
  component: Component,
  componentProps
}: GlobalLoginModalProps<T>) {

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-transparent shadow-none border-none">
        <VisuallyHidden>
          <DialogTitle>Modal de registro</DialogTitle>
        </VisuallyHidden>
        <Component {...componentProps} />
      </DialogContent>
    </Dialog>
  );
}