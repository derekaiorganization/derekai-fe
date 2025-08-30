"use client"

import { useState } from "react";

export function useLoginModal() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}