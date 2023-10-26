import { Github } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
export const Header = () => {
  return (
    <header className="h-[50px]" id="Home">
      <div className="h-full flex items-center justify-end px-8">
        <ul className="flex gap-4 items-center">
          <h1>maj.dev</h1>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Github />
          </li>
        </ul>
      </div>
    </header>
  );
};
