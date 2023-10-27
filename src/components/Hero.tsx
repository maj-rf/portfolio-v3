import Image from 'next/image';
import { SectionWrapper } from './common/SectionWrapper';
export const Hero = () => {
  return (
    <SectionWrapper id="About">
      <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left">
        <Image
          src="/assets/hero_img.jpg"
          alt="Maj's Profile Picture"
          width="100"
          height="100"
          className="rounded-xl"
        />
        <div>
          <p className="text-lg font-semibold">Ralph Majed R. Fermin</p>
          <p>Full Stack Developer, Pokemon Trainer</p>
        </div>
        <div className="ml-0 md:ml-auto bg-muted px-2 p-1 rounded-lg">
          rmkfermin@gmail.com
        </div>
      </div>
      <hr></hr>
      <div className="text-muted-foreground">
        <h1 className="text-xl text-primary">
          I build <s className="decoration-1">and occasionally break</s> stuff.
        </h1>
        <p>
          I’m a Software Developer based in Philippines, building full-stack web
          applications with{' '}
          <span className="text-highlight font-semibold">
            TypeScript, React, Node.JS
          </span>
          , and{' '}
          <span className="text-highlight font-semibold">MySQL / NoSQL</span>.
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
