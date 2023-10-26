import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Sidebar />
      <section id="Tech Stack" className="h-screen bg-red-200"></section>
      <section id="Projects" className="h-screen bg-emerald-200"></section>
    </div>
  );
}
