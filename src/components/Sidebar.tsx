'use client';

import { useState } from 'react';
import { SidebarToggle } from './SidebarToggle';
import { motion } from 'framer-motion';
export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col justify-center items-center bg-secondary text-secondary-foreground"
      initial={false}
      animate={open ? 'open' : 'closed'}
    >
      <motion.div
        className={`bg-red-100 fixed top-0 left-0 bottom-0 w-full sm:w-[400px] bg-secondary text-secondary-foreground ${
          open ? '' : ''
        }`}
        variants={variants}
      >
        <ul className="absolute w-full h-full flex flex-col justify-center items-center gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
        </ul>
      </motion.div>
      <SidebarToggle toggleMenu={() => setOpen((prev) => !prev)} />
    </motion.div>
  );
};
