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
      clipPath: 'circle(20px at 40px 40px)',
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
        className="fixed top-[-15px] left-0 bottom-0 w-full h-[100lvh + 15px] sm:w-[300px] bg-primary text-secondary z-10"
        variants={variants}
      >
        <SidebarLinks closeMenu={() => setOpen(false)} />
      </motion.div>
      <SidebarToggle toggleMenu={() => setOpen((prev) => !prev)} />
    </motion.nav>
  );
};
