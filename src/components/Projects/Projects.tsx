import { SectionWrapper } from '../common/SectionWrapper';
import { projects } from '@/data';
import { ProjectCard } from './ProjectCard';
import { ProjectCarousel } from './ProjectCarousel';

export const Projects = async () => {
  return (
    <SectionWrapper id="Projects">
      <h2 className="font-semibold text-2xl">
        <span className="bg-primary w-fit text-secondary px-1 rounded-lg border-[3px] border-muted-foreground">{`>_`}</span>{' '}
        Projects
        <span className="animate-typing border-r-4" />
      </h2>
      <div className="relative">
        <ProjectCarousel />
      </div>

      {/* <ul className="grid grid-cols-1 md:grid-cols-2 py-4 gap-8">
        {projects.map((project) => {
          return (
            <li key={project.title + ' card'}>
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul> */}
    </SectionWrapper>
  );
};
