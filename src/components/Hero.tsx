"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { useEffect, useState } from 'react';
import WelcomeModal from './ui/WelcomeModal';

type HeroProps = {
  onLoginClick: () => void;
};

// Hero component for derek.ai landing page
export default function Hero({ onLoginClick }: HeroProps) {
  const supabase = supabaseBrowser;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
    <div className="relative isolate overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-3xl px-7 pb-24 pt-20 flex flex-col items-center justify-center text-center">
        <h1 className="font-libertinus font-semibold text-gray-900 mb-1 tracking-tighter text-4xl md:text-6xl">
          Estudia el doble, en la mitad del tiempo
        </h1>
        <p className="font-inter mt-6 text-lg leading-6 text-gray-900">
          Genera flashcards y quizzes de tus apuntes en segundos, estudia con métodos comprobados científicamente para que no vuelvas a olvidar nada
        </p>
        <div className="relative w-[90vw] max-w-7xl self-center my-6">
          <Image
            src="/images/mainheroimage.svg"
            alt="derek.ai logo"
            width={2000}
            height={800}
            quality={100}
            priority
            className="w-full h-auto"
          />
          {/* Button slightly on top of the image */}
          <div className="absolute left-1/2 top-[80%] transform -translate-x-1/2 z-10">
            <Button className='px-10 py-4 text-base font-normal' onClick={onLoginClick}>
              Comenzar hoy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}