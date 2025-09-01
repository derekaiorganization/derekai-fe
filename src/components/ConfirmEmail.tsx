"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ConfirmEmailProps = {
  onCloseModal?: () => void;
};

export function ConfirmEmail({ onCloseModal }: ConfirmEmailProps) {
  const closeModal = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  }

  return (
    <div className={cn("flex flex-col gap-6")}>
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
          <Button className="w-full mt-2" onClick={closeModal}>
            Regresar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}