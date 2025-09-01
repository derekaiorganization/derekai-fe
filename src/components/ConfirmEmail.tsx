"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type ConfirmEmailProps = {
  open: boolean;
  onClose: () => void;
};

export default function ConfirmEmail({ open, onClose }: ConfirmEmailProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <Card className="max-w-sm w-full mx-auto">
        <CardHeader>
          <CardTitle className="font-libertinus text-lg tracking-tighter text-center">
            Te enviamos un correo
          </CardTitle>
          <CardDescription className="font-inter font-normal text-center">
            Te enviamos un correo de confirmación, por favor ve a tu bandeja y confirma tu correo.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full mt-2" onClick={onClose}>
            Regresar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}