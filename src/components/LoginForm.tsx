"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { supabaseBrowser } from "@/lib/supabase/browser"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation"

type LoginFormProps = {
  onSuccess?: () => void;
};


export function LoginForm({ onSuccess }: LoginFormProps) {
  const router = useRouter();
  const supabase = supabaseBrowser;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Start Google OAuth flow (redirects user)
  const signInWithGoogle = async () => {
    setLoading(true);
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
      setLoading(false);
      return;
    }

    if (data?.url) {
      window.location.href = data.url;
    } else {
      // signInWithOAuth often redirects automatically; nothing else to do here
      setLoading(false);
    }
  };

  // Sign up with email & password
  const signUpWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      if (onSuccess) onSuccess();
    }
    setLoading(false);
  };

  // Sign in with email & password
  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      // On success redirect or reload to get server-side session
      router.push("/");
    }
    setLoading(false);
  };
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle className="font-libertinus font-semibold text-2xl tracking-tighter text-center">
            Únete a la lista de espera
          </CardTitle>
          <CardDescription className="text-center">
            Derek estará disponible muy pronto. ¡Ingresa tu correo electrónico para unirte a la lista de espera y tener privilegios especiales el día de lanzamiento!
          </CardDescription>
          {/* Google button below description, above form */}
          <Button
            variant="outline"
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-2 mt-6"
          >
            <FcGoogle className="text-xl" />
            Registrarme con Google
          </Button>
          {/* Divider with text below Google button */}
          <div className="flex items-center gap-4 w-full mt-2">
            <Separator className="flex-1" />
            <span className="font-inter text-sm text-gray-500 mx-2 whitespace-nowrap">
              o regístrate con tu correo
            </span>
            <Separator className="flex-1" />
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@ejemplo.com"
                  required
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="Contraseña">Contraseña</Label>
                </div>
                <Input id="password" type="password" placeholder="Ingresa una contraseña" required onChange={handlePasswordChange} value={password} />
              </div>
              <div className="flex flex-col gap-3">
                <Button disabled={loading} type="submit" onClick={signUpWithEmail} className="w-full">
                  Registrarme
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
