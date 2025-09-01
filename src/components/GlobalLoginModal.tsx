"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { LoginForm } from "./LoginForm";

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
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}