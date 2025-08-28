import Benefits from '@/components/benefits';
import DocumentLoad from '@/components/documentload';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import Calltoaction from '@/components/cta';
import { Footer2 } from '@/components/footer2';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DocumentLoad />
      <Benefits />
      <Calltoaction />
      <Footer2 />
    </main>
  );
}