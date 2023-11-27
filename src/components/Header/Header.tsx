import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from './ThemeToggle';
export const Header = () => {
  return (
    <header
      className="h-[50px] border-b-2 shadow-sm bg-primary-foreground"
      id="Home"
    >
      <div className="h-full flex items-center justify-end px-8">
        <ul className="flex gap-4 items-center">
          <h1>maj.dev</h1>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href="https://github.com/bananabread08"
              target="_blank"
              title="Github profile of bananabread08 "
            >
              <GitHubLogoIcon width={25} height={25} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
