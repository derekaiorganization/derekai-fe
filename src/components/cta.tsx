"use client"
import { Button } from "./ui/button";

type CalltoactionProps = {
  onLoginClick: () => void;
};

export default function Calltoaction({ onLoginClick }: CalltoactionProps) {
  return (
    <div className="relative py-14 flex flex-col items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>{/* Centered Title and Paragraph */}
      <div className="text-center mb-6 mt-24">
        <h2 className="text-5xl font-libertinus font-semibold text-gray-900 mb-3 tracking-tighter">
          Acelera tu aprendizaje hoy
        </h2>
        <p className="text-base text-gray-700 font-inter">
          Derek estará disponible muy pronto, regístrate hoy y obtén créditos gratis el dia de lanzamiento
        </p>
      </div>
        <div className="mt-1">
            <Button
            size="lg"
            onClick={onLoginClick}
            >
            Regístrate ahora
            </Button>
        </div>
        <div className="mt-1">
            <Button
            size="lg"
            onClick={onLoginClick}
            >
            Regístrate con Google
            </Button>
        </div>
        
    </div>
    );
}