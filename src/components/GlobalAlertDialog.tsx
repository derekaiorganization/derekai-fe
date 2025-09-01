"use client"
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "./ui/AlertDialog";
import { useGlobalAlertDialog } from "@/context/AlertDialogContext";

export default function GlobalAlertDialog() {
  const { open, setOpen } = useGlobalAlertDialog();

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        {/* SVG image on top */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/SuccesfulRegistry.svg"
            alt="Registro exitoso"
            width={120}
            height={120}
            priority
          />
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-libertinus text-2xl tracking-tighter text-center">
            ¡Ya estás dentro!
          </AlertDialogTitle>
          <AlertDialogDescription className="font-inter font-normal text-center">
            Gracias por registrarte en la lista de espera, pronto te enviaremos un correo para avisarte cuando podrás comenzar a estudiar y disfrutar de los beneficios que tenemos para ti!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-full mt-4">
            Regresar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}