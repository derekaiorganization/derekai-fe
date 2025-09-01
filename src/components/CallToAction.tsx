"use client"
import { supabaseBrowser } from "@/lib/supabase/browser";
import { Button } from "./ui/Button";
import { FcGoogle } from "react-icons/fc";

type CallToActionProps = {
  onLoginClick: () => void;
};

export default function CallToAction({ onLoginClick }: CallToActionProps) {
  const supabase = supabaseBrowser;
  // Start Google OAuth flow (redirects user)
  const signInWithGoogle = async () => {
    // The redirectTo must match the entry in Supabase & Google Cloud OAuth
    const redirectTo = `${window.location.origin}/auth/callback`;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });

    // In many setups the browser will already have been redirected by supabase
    // but in case supabase returns a url, we redirect manually
    if (error) {
      alert(error.message);
      return;
    }

    if (data?.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="relative py-14 flex flex-col items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>{/* Centered Title and Paragraph */}
      <div className="w-[90vw] text-center mb-6 mt-24 mx-auto">
        <h2 className="text-4xl font-libertinus font-semibold text-gray-900 mb-3 tracking-tighter">
          Acelera tu aprendizaje hoy
        </h2>
        <p className="text-base text-gray-700 font-inter">
          Derek estará disponible muy pronto, regístrate hoy y obtén créditos gratis el dia de lanzamiento
        </p>
      </div>
      <div className="w-full max-w-xs flex flex-col gap-2">
        <Button
          size="lg"
          onClick={onLoginClick}
          className="w-full"
        >
          Regístrate ahora
        </Button>
        <Button
          size="lg"
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2"
        >
          <FcGoogle className="text-xl" />
          Regístrate con Google
        </Button>
      </div>
    </div>
  );
}