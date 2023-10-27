import { Button } from '../ui/button';
import { motion } from 'framer-motion';
export const SidebarToggle = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <Button
      onClick={toggleMenu}
      className="rounded-full fixed top-[25px] left-[25px] z-10 w-[30px] h-[30px] outline-none p-0"
      variant="secondary"
    >
      <svg width="15" height="15" viewBox="0 0 23 23">
        <motion.path
          className="stroke-secondary-foreground"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          strokeWidth="3"
          className="stroke-secondary-foreground"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          className="stroke-secondary-foreground"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </Button>
  );
};
