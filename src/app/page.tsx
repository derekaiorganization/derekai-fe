"use client"
import { useState } from 'react';
import Benefits from '@/components/Benefits';
import DocumentLoad from '@/components/DocumentLoad';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Calltoaction from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import GlobalModal from '@/components/GlobalModal';
import { LoginForm } from '@/components/LoginForm';
import { ConfirmEmail } from '@/components/ConfirmEmail';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmEmailOpen, setConfirmEmailOpen] = useState(false);

  const openConfirmEmailModal = () => {
    setModalOpen(false);
    setConfirmEmailOpen(true);
  };

  const closeConfirmEmailModal = () => {
    setConfirmEmailOpen(false);
  }

  return (
    <>
      <main className="min-h-screen">
        <Navbar onLoginClick={() => setModalOpen(true)} />
        <Hero onLoginClick={() => setModalOpen(true)} />
        <DocumentLoad />
        <Benefits />
        <Calltoaction onLoginClick={() => setModalOpen(true)} />
        <Footer />
      </main>
      <GlobalModal componentProps={{ onSuccess: () => openConfirmEmailModal() }} component={LoginForm} open={modalOpen} onClose={() => setModalOpen(false)} />
      <GlobalModal componentProps={{ onCloseModal: () => closeConfirmEmailModal() }} component={ConfirmEmail} open={confirmEmailOpen} onClose={() => setConfirmEmailOpen(false)} />
    </>
  );
}