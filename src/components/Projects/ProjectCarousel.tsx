'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { projects } from '@/data';
import { ProjectCard } from './ProjectCard';
import Image from 'next/image';
let collapsedAspectRatio = 1 / 3;
let fullAspectRatio = 3 / 2;
let margin = 12;
let gap = 2;

export function ProjectCarousel() {
  let [index, setIndex] = useState(0);
  return (
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
            className="absolute left-1 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-600"
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
            className="absolute right-1 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-600"
            onClick={() => {
              if (index === projects.length - 1) return setIndex(0);
              setIndex(index + 1);
            }}
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </motion.button>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-[-2.5rem] flex h-14 justify-center overflow-hidden mx-auto">
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
              <div className="w-4 h-2 bg-white"></div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-[-2rem] flex h-14 justify-center overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            x: `-${
              index * 100 * (collapsedAspectRatio / fullAspectRatio) +
              margin +
              index * gap
            }%`,
          }}
          style={{
            aspectRatio: fullAspectRatio,
            gap: `${gap}%`,
          }}
          className="flex"
        >
          {projects.map((project, i) => (
            <motion.button
              onClick={() => setIndex(i)}
              initial={false}
              whileHover={{ opacity: 1 }}
              animate={i === index ? 'active' : 'inactive'}
              variants={{
                active: {
                  aspectRatio: fullAspectRatio,
                  marginLeft: `${margin}%`,
                  marginRight: `${margin}%`,
                  opacity: 1,
                },
                inactive: {
                  aspectRatio: collapsedAspectRatio,
                  marginLeft: 0,
                  marginRight: 0,
                  opacity: 0.5,
                },
              }}
              className="shrink-0"
              key={project.title + '-slider-btn'}
            >
              <Image
                src={project.img}
                className="h-full object-cover"
                alt={`${project.img}-slider-btn`}
              />
            </motion.button>
          ))}
        </motion.div>
      </div> */}
    </MotionConfig>
  );
}
