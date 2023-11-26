'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export const SectionWrapper = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      ref={ref}
      animate={isInView && 'animate'}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl m-auto px-10 my-14 flex flex-col gap-4">
        {children}
      </div>
    </motion.section>
  );
};
