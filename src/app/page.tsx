"use client"
import { useState } from 'react';
import Benefits from '@/components/Benefits';
import DocumentLoad from '@/components/DocumentLoad';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Calltoaction from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import GlobalLoginModal from '@/components/GlobalLoginModal';

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
        <Footer />
      </main>
      <GlobalLoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}