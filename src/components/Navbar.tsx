import React from 'react';
import { Facebook, Twitter, Github } from 'lucide-react';
export const Navbar = () => {
  return (
    <nav className="h-24">
      <div className="h-full max-w-5xl flex flex-row items-center justify-end sm:justify-between bg-green-300 mx-auto">
        <div>
          <h1>maj.dev</h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Github />
          </li>
        </ul>
      </div>
    </nav>
  );
};
