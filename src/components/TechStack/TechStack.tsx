import { SectionWrapper } from '../common/SectionWrapper';
import { InteractiveStacks } from './InteractiveStack';

export const TechStack = () => {
  return (
    <SectionWrapper id="Tech Stack">
      <h2 className="font-semibold text-2xl">
        <span className="bg-primary text-secondary px-1 rounded-lg border-[3px] border-muted-foreground">{`>_`}</span>{' '}
        Tech Stack
        <span className="animate-typing border-r-4" />
      </h2>
      <InteractiveStacks />
    </SectionWrapper>
  );
};
