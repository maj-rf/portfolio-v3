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

type TRepo = {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: number;
};

async function getGithubPinnedRepos() {
  const res = await fetch(
    'https://gh-pinned-repos.egoist.dev/?username=bananabread08'
  );
  if (!res.ok) throw new Error('Failed to fetch Github repos.');
  return res.json();
}

export const Projects = async () => {
  const data: TRepo[] = await getGithubPinnedRepos();
  return (
    <SectionWrapper id="Projects">
      <h2 className="font-semibold text-2xl">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {projects.map((project) => {
          return (
            <li key={project.title + ' card'}>
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
      <h3 className="font-semibold text-2xl">Other Projects</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((repo, idx) => {
          if (idx === 1 || idx === 0) return;
          return (
            <li
              key={repo.owner + repo.repo}
              className="grid grid-rows-1 gap-4 border border-muted-foreground hover:shadow-md hover:shadow-muted-foreground rounded-md relative"
            >
              <a
                href={repo.link}
                target="_blank"
                className="p-4 w-full h-full block"
              >
                <div className="flex justify-between">
                  <p>{repo.repo}</p>
                  <div className="flex items-center gap-2">
                    <p>{repo.stars}</p>
                    <StarIcon />
                  </div>
                </div>
                <p className="text-muted-foreground">{repo.description}</p>
              </a>
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
