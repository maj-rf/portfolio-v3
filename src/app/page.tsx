import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { TechStack } from '@/components/TechStack';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Sidebar />
      <Hero />
      <TechStack />
      <Projects />
    </div>
  );
}
