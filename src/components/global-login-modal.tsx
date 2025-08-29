"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { useLoginModal } from "@/hooks/use-login-modal";

type GlobalLoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function GlobalLoginModal({
  open,
  onClose,
}: GlobalLoginModalProps) {
  const { setOpen } = useLoginModal();

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <LoginForm />
        <button onClick={onClose}>Close</button>
      </DialogContent>
    </Dialog>
  );
}