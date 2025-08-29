import { Button } from "./ui/button";
import { FaFilePdf, FaFileWord, FaFilePowerpoint } from "react-icons/fa";

export default function DocumentLoad() {
  return (
    <div className="relative flex items-center justify-center min-h-[60vh]">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      {/* Responsive horizontal padding for outer card */}
      <div className="w-full px-4 sm:px-0">
        <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 flex flex-col items-center w-full max-w-3xl mx-auto h-auto sm:w-[90vw] sm:mx-auto md:w-[60%]">
          {/* Centered text */}
          <div className="text-center mb-6">
            <span className="block text-2xl sm:text-3xl font-libertinus text-gray-800">
              Convierte cualquier archivo en material de estudio en instantes
            </span>
          </div>
          {/* Inner dashed square */}
          <div className="border-2 border-dashed border-gray-400 rounded-lg bg-white flex flex-col items-center justify-center w-full max-w-[400px] p-6 h-auto mx-auto">
            {/* Icons */}
            <div className="flex flex-wrap justify-center gap-4 mb-2 text-gray-500 text-2xl sm:text-3xl">
              <FaFilePdf />
              <FaFileWord />
              <FaFilePowerpoint />
            </div>
            {/* Text */}
            <div className="text-center text-gray-700 mb-4 text-sm sm:text-base">
              Arrastra aquí tu archivo
              <br />
              ó carga tu archivo
            </div>
            {/* Button */}
            <Button className="px-6 font-normal w-full sm:w-auto">Cargar archivo</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
