'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { type Project } from '@/data';
import { GitHubLogoIcon, Link2Icon } from '@radix-ui/react-icons';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardContent className="p-0">
        <Image src={project.img} alt={project.title + ' main'} />
      </CardContent>
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="uppercase text-lg">{project.title}</CardTitle>
        <ul className="flex flex-wrap gap-2 text-sm uppercase">
          {project.tags.map((tag) => (
            <li
              key={`${project.title} ${tag}`}
              className="bg-highlight px-2 rounded-lg font-semibold text-primary-foreground"
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
    </Card>
  );
};
