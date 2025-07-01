import Image from 'next/image';
import hero_img from '../assets/hero_img.jpg';
import { SectionWrapper } from './common/SectionWrapper';
export const Hero = () => {
  return (
    <SectionWrapper id="About">
      <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left py-4">
        <div className="w-24 h-24 rounded-xl overflow-hidden">
          <Image
            src={hero_img}
            alt="Maj's Profile Picture"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">Ralph Majed R. Fermin</p>
          <p>Full Stack Developer, Pokemon Trainer</p>
        </div>
        <div className="ml-0 md:ml-auto bg-muted px-2 p-1 rounded-lg">
          rmkfermin@gmail.com
        </div>
      </div>
      <hr></hr>
      <div className="text-muted-foreground flex flex-col gap-4">
        <h1 className="text-xl text-primary">
          I build{' '}
          <span className="strike animate-strike">and occasionally break</span>{' '}
          stuff.
        </h1>
        <p>
          I’m a Software Developer based in Philippines, building full-stack web
          applications with{' '}
          <span className="text-highlight font-semibold">
            TypeScript, React, Node.JS
          </span>
          , and{' '}
          <span className="text-highlight font-semibold">
            PostgreSQL / NoSQL
          </span>
          .
        </p>
        <p>
          I like playing games especially JRPGs which is instrumental to my
          journey in learning how to code / program. I want to build tools to
          enhance the experience and enjoyment in these games.
        </p>
      </div>
    </SectionWrapper>
  );
};
