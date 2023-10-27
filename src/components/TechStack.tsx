import { SectionWrapper } from './common/SectionWrapper';
import { backend, frontend } from '@/data';
import Image from 'next/image';
export const TechStack = () => {
  return (
    <SectionWrapper id="Tech Stack">
      <h2 className="font-semibold text-2xl">Tech Stack</h2>
      <div className="space-y-4">
        <article className="flex flex-wrap gap-4 justify-between">
          {frontend.map((tech) => (
            <div key={tech.name} className="flex flex-col gap-2">
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
        <article className="flex flex-wrap gap-4 justify-between">
          {backend.map((tech) => (
            <div key={tech.name} className="flex flex-col gap-2">
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
