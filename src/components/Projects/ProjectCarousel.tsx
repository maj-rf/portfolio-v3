'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useState, useLayoutEffect } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { projects } from '@/data';
import { ProjectCard } from './ProjectCard';
import { Switch } from '@/components/ui/switch';

export function ProjectCarousel() {
  let [index, setIndex] = useState(0);
  const [mode, setMode] = useState(true);

  function handleAutoplay() {
    setMode((prev) => !prev);
  }

  useLayoutEffect(() => {
    if (mode) {
      const changeSlide = setInterval(
        () => setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1)),
        4000
      ); // change your switch time here.
      return () => clearInterval(changeSlide);
    }
  }, [mode]);

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 mb-2">
        <Switch id="autoplay" checked={mode} onCheckedChange={handleAutoplay} />
        <label htmlFor="autoplay">Autoplay {mode ? ' On' : 'Off'}</label>
      </div>
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative overflow-hidden">
          <ul className="flex">
            {projects.map((project) => {
              return (
                <motion.li
                  key={project.title + ' card'}
                  animate={{ x: `-${index * 100}%` }}
                  className="min-w-full"
                >
                  <ProjectCard project={project} />
                </motion.li>
              );
            })}
          </ul>
          <AnimatePresence initial={false}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0, pointerEvents: 'none' }}
              whileHover={{ opacity: 1 }}
              className="absolute left-0 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-600"
              onClick={() => {
                if (index === 0) return setIndex(3);
                setIndex(index - 1);
              }}
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </motion.button>
          </AnimatePresence>

          <AnimatePresence initial={false}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0, pointerEvents: 'none' }}
              whileHover={{ opacity: 1 }}
              className="absolute right-0 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-600"
              onClick={() => {
                if (index === projects.length - 1) return setIndex(0);
                setIndex(index + 1);
              }}
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </motion.button>
          </AnimatePresence>
        </div>

        <div className="absolute inset-x-0 bottom-[-1rem] flex h-fit justify-center overflow-hidden mx-auto">
          <motion.div initial={false} animate={{}} className="flex gap-4">
            {projects.map((project, i) => (
              <motion.button
                onClick={() => setIndex(i)}
                initial={false}
                whileHover={{ opacity: 1 }}
                animate={i === index ? 'active' : 'inactive'}
                variants={{
                  active: {
                    opacity: 1,
                  },
                  inactive: {
                    opacity: 0.5,
                  },
                }}
                key={project.title + '-slider-btn'}
              >
                <div className="w-6 h-2 rounded-lg bg-primary"></div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </MotionConfig>
    </div>
  );
}
