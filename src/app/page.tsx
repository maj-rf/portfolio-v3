import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { TechStack } from '@/components/TechStack';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Sidebar />
      <Hero />
      <TechStack />
      <section id="Projects" className="h-screen bg-emerald-200"></section>
    </div>
  );
}
