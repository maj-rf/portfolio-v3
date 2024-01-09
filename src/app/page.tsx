import { Hero } from '@/components/Hero';
import { OtherProjects } from '@/components/Projects/OtherProjects';
import { Projects } from '@/components/Projects/Projects';
import { TechStack } from '@/components/TechStack/TechStack';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TechStack />
      <Projects />
      <OtherProjects />
    </main>
  );
}
