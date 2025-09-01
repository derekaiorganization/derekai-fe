"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/Dialog";
import { LoginForm } from "./LoginForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

type GlobalLoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function GlobalLoginModal({
  open,
  onClose,
}: GlobalLoginModalProps) {

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-transparent shadow-none border-none">
        <VisuallyHidden>
          <DialogTitle>Modal de registro</DialogTitle>
        </VisuallyHidden>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}