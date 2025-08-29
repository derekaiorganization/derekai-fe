"use client"
import { useState } from 'react';
import Benefits from '@/components/benefits';
import DocumentLoad from '@/components/documentload';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import Calltoaction from '@/components/cta';
import { Footer2 } from '@/components/footer2';
import GlobalLoginModal from '@/components/global-login-modal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        <Navbar onLoginClick={() => setModalOpen(true)} />
        <Hero onLoginClick={() => setModalOpen(true)}/>
        <DocumentLoad />
        <Benefits />
        <Calltoaction onLoginClick={() => setModalOpen(true)} />
        <Footer2 />
      </main>
      <GlobalLoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}