import React from 'react';
import { SectionWrapper } from '../common/SectionWrapper';
import { StarIcon } from '@radix-ui/react-icons';

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
    'https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=bananabread08'
  );
  if (!res.ok) throw new Error('Failed to fetch Github repos.');
  return res.json();
}

export const OtherProjects = async () => {
  const data: TRepo[] = await getGithubPinnedRepos();
  return (
    <SectionWrapper id="Other Projects">
      <h2 className="font-semibold text-2xl">
        <span className="bg-primary w-fit text-secondary px-1 rounded-lg border-[3px] border-muted-foreground">{`>_`}</span>{' '}
        Other Projects
        <span className="animate-typing border-r-4" />
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
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
