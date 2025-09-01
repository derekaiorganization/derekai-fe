import Image from "next/image";
import { Card } from "@/components/ui/Card";

export default function Benefits() {
  return (
    <div className="relative py-14 flex flex-col items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      {/* Centered Title and Paragraph */}
      <div className="w-[90vw] text-center mb-12 mt-24 md:mb-24">
        <h2 className="font-libertinus font-semibold text-gray-900 mb-4 tracking-tighter text-4xl md:text-6xl">
          Con derek recuerda todo lo que estudias
        </h2>
        <p className="text-base text-gray-700 font-inter">
          Usamos la repetición espaciada y el estudio activo para hacer tu material de estudio,
          todo impulsado por los modelos mas potentes de IA.
        </p>
      </div>
      {/* Benefit Card 1 */}
      <div className="w-[90vw] max-w-5xl mx-auto mb-10">
        <Card className="flex flex-col md:flex-row items-center justify-between p-6 relative overflow-hidden bg-gray-50 border border-gray-300">
          {/* Left: Text */}
          <div className="md:w-1/2 space-y-1">
            <h3 className="text-3xl font-libertinus font-normal text-gray-900 tracking-tighter">
              Crea flashcards en segundos
            </h3>
            <p className="text-base leading-6 text-gray-700 font-inter">
              Convierte tus apuntes y resúmenes en tarjetas de estudio con los puntos clave
            </p>
          </div>
          {/* Right: Image "emerging" from bottom */}
          <div className="md:w-1/2 flex justify-center relative h-64">
            <div className="relative">
              <Image
                src="/images/benefit-flashcards.svg"
                alt="Flashcards preview"
                width={500}
                height={200}
                className="relative translate-y-1"
              />
            </div>
          </div>
        </Card>
      </div>
      {/* Benefit Card 2 */}
      <div className="w-[90vw] max-w-5xl mx-auto mb-10">
        <Card className="flex flex-col md:flex-row items-center justify-between p-6 relative overflow-hidden bg-gray-50 border border-gray-300">
          {/* Left: Text */}
          <div className="md:w-1/2 space-y-1">
            <h3 className="text-3xl font-libertinus font-normal text-gray-900 tracking-tighter">
              No olvides nada de lo que estudias
            </h3>
            <p className="text-base leading-6 text-gray-700 font-inter">
              La repetición espaciada es el método de estudio con mayor eficacia comprobada en múltiples estudios científicos. Te mostramos las flashcards en intervalos inteligentes para que la información permanezca en tu memoria a largo plazo.
            </p>
          </div>
          {/* Right: Image "emerging" from bottom */}
          <div className="md:w-1/2 flex justify-center relative h-64">
            <div className="relative">
              <Image
                src="/images/benefit-spacedrepetition.svg"
                alt="Flashcards preview"
                width={600}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Card>
      </div>
      {/* Benefit Card 3 */}
      <div className="w-[90vw] max-w-5xl mx-auto mb-10">
        <Card className="flex flex-col md:flex-row items-center justify-between p-6 relative overflow-hidden bg-gray-50 border border-gray-300">
          {/* Left: Text */}
          <div className="md:w-1/2 space-y-1">
            <h3 className="text-3xl font-libertinus font-normal text-gray-900 tracking-tighter">
              Presenta tus exámenes con seguridad
            </h3>
            <p className="text-base leading-6 text-gray-700 font-inter">
              Practica con pruebas creadas a partir de tu propio material y llega preparado para cualquier pregunta.
            </p>
          </div>
          {/* Right: Image "emerging" from bottom */}
          <div className="md:w-1/2 flex justify-center relative h-64">
            <div className="relative">
              <Image
                src="/images/benefit-quizz.svg"
                alt="Flashcards preview"
                width={500}
                height={200}
                className="relative translate-y-1"
              />
            </div>
          </div>
        </Card>
      </div>
      {/* Benefit Card 4 */}
      <div className="w-[90vw] max-w-5xl mx-auto mb-10">
        <Card className="flex flex-col md:flex-row items-center justify-between p-6 relative overflow-hidden bg-gray-50 border border-gray-300">
          {/* Left: Text */}
          <div className="md:w-1/2 space-y-1">
            <h3 className="text-3xl font-libertinus font-normal text-gray-900 tracking-tighter">
              Modo de casos clínicos
            </h3>
            <p className="text-base leading-6 text-gray-700 font-inter">
              Haz un quiz con preguntas de tipo caso clínico, solo elige la opción “casos clínicos” y comienza a estudiar.
            </p>
          </div>
          {/* Right: Image "emerging" from bottom */}
          <div className="md:w-1/2 flex justify-center relative h-64">
            <div className="relative">
              <Image
                src="/images/benefits-clinicalcases.svg"
                alt="Flashcards preview"
                width={500}
                height={200}
                className="relative translate-y-1"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}