import { SectionWrapper } from './common/SectionWrapper';
import { backend, frontend } from '@/data';
import Image from 'next/image';
export const TechStack = () => {
  return (
    <SectionWrapper id="Tech Stack">
      <h2 className="font-semibold text-2xl">
        <span className="bg-primary text-secondary px-1 rounded-lg border-[3px] border-muted-foreground">{`>_`}</span>{' '}
        Tech Stack
        <span className="animate-typing border-r-4" />
      </h2>
      <div className="space-y-4 py-4">
        <article className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {frontend.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <Image
                src={tech.src}
                alt={tech.name + ' icon'}
                width={80}
                height={80}
              />
              <p className="text-center">{tech.name}</p>
            </div>
          ))}
        </article>
        <article className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {backend.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <Image
                src={tech.src}
                alt={tech.name + ' icon'}
                width={80}
                height={80}
              />
              <p className="text-center">{tech.name}</p>
            </div>
          ))}
        </article>
      </div>
      {/* <Scroller arr={frontend} direction="right" />
      <Scroller arr={backend} direction="left" /> */}
    </SectionWrapper>
  );
};
