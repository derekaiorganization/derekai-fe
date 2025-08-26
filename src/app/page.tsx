import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}