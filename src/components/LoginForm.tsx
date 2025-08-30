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
import { useState, useEffect } from "react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const supabase = supabaseBrowser;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) setModalOpen(true);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) setModalOpen(true);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase]);


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
      alert("Check your email for a confirmation link (if required).");
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
      window.location.href = "/";
    }
    setLoading(false);
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="font-libertinus font-semibold text-2xl tracking-tighter text-center">Regístrate hoy</CardTitle>
          <CardDescription className="text-center">
            Ingresa tu correo electrónico para registrarte en tu cuenta
          </CardDescription>
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
                <Input id="password" type="password" required onChange={handlePasswordChange} value={password} />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" onClick={signUpWithEmail} className="w-full">
                  Registrarme
                </Button>
                <Button variant="outline" onClick={signInWithGoogle} className="w-full">
                  Registrarme con Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <a href="#" className="underline underline-offset-4">
                Iniciar sesión
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
