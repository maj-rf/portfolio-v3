import { SectionWrapper } from './common/SectionWrapper';
import { projects } from '@/data';
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
import Link from 'next/link';

export const Projects = () => {
  return (
    <SectionWrapper id="Projects">
      <h2 className="font-semibold text-2xl">Projects</h2>
      <ul className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2  gap-8">
        {projects.map((project) => {
          return (
            <li key={project.title + ' card'}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image src={project.img} alt={project.title + ' main'} />
                </CardContent>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <ul className="flex flex-wrap gap-2 text-sm uppercase">
                    {project.tags.map((tag) => (
                      <li
                        key={`${project.title} ${tag}`}
                        className="bg-highlight px-2 py-1 rounded-lg text-black"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-4 justify-end">
                  <Button variant="link">
                    <a href={project.live} target="_blank">
                      Visit Website
                    </a>
                  </Button>
                  <Button variant="link">
                    <a href={project.repo} target="_blank" className="block">
                      Repository
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
};
