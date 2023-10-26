import { Variants, motion } from 'framer-motion';

const links = ['Home', 'About', 'Tech Stack', 'Projects'];

const variants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const SidebarLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <motion.ul
      className="absolute w-full h-full flex flex-col justify-center items-center gap-6"
      variants={variants}
    >
      {links.map((link) => (
        <motion.li
          key={link}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg font-semibold tracking-wide"
        >
          <a href={`#${link}`} onClick={closeMenu}>
            {link}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};
