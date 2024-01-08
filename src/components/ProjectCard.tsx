'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { type Project } from '@/data';
import { GitHubLogoIcon, Link2Icon } from '@radix-ui/react-icons';
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion';

export const ProjectCard = ({ project }: { project: Project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);
  const MotionCard = motion(Card);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionCard
      className="overflow-hidden h-full"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div onMouseMove={handleMouseMove}></div>
      <CardContent className="p-0">
        <Image src={project.img} alt={project.title + ' main'} />
      </CardContent>
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>{project.title}</CardTitle>
        <ul className="flex flex-wrap gap-2 text-sm uppercase">
          {project.tags.map((tag) => (
            <li
              key={`${project.title} ${tag}`}
              className="bg-highlight px-2 rounded-lg font-semibold text-black"
            >
              {tag}
            </li>
          ))}
        </ul>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex gap-4 justify-end mt-auto">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            className="text-primary text-sm underline-offset-4 hover:underline flex items-center gap-2"
          >
            <Link2Icon />
            <span>Visit Website</span>
          </a>
        ) : null}
        <Button variant="link">
          <a
            href={project.repo}
            target="_blank"
            className="text-primary text-sm underline-offset-4 hover:underline flex items-center gap-2"
          >
            <GitHubLogoIcon />
            <span>Repository</span>
          </a>
        </Button>
      </CardFooter>
    </MotionCard>
  );
};
