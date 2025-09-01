"use client"
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
        <AlertDialogHeader>
          <AlertDialogTitle className="font-libertinus text-lg tracking-tighter">
            ¡Ya estás dentro!
          </AlertDialogTitle>
          <AlertDialogDescription className="font-inter font-normal">
            Gracias por registrarte en la lista de espera, pronto te enviaremos un correo para avisarte cuando podrás comenzar a estudiar y disfrutar de los beneficios que tenemos para ti!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Regresar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}