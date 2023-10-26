'use client';

import { useState } from 'react';
import { SidebarToggle } from './SidebarToggle';
import { motion } from 'framer-motion';
import { SidebarLinks } from './SidebarLinks';
export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 20px 20px)',
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
    <motion.nav
      className="flex flex-col justify-center items-center"
      initial={false}
      animate={open ? 'open' : 'closed'}
    >
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-full h-[100lvh] sm:w-[300px] bg-secondary"
        variants={variants}
      >
        <SidebarLinks closeMenu={() => setOpen(false)} />
      </motion.div>
      <SidebarToggle toggleMenu={() => setOpen((prev) => !prev)} />
    </motion.nav>
  );
};
