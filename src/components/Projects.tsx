import { SectionWrapper } from './common/SectionWrapper';
import { type Project, projects } from '@/data';
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
import { GitHubLogoIcon, Link2Icon, StarIcon } from '@radix-ui/react-icons';

export const Projects = async () => {
  return (
    <SectionWrapper id="Projects">
      <h2 className="font-semibold text-2xl">
        <span className="bg-primary w-fit text-secondary px-1 rounded-lg border-[3px] border-muted-foreground">{`>_`}</span>{' '}
        Projects
        <span className="animate-typing border-r-4" />
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 py-4 gap-8">
        {projects.map((project) => {
          return (
            <li key={project.title + ' card'}>
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
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
    </Card>
  );
};
