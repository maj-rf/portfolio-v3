'use client';

import { Button } from '../ui/button';
import { frontend, backend, Tech } from '@/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { DesktopIcon, RocketIcon } from '@radix-ui/react-icons';
type TStack = {
  heading: string;
  subheading: string;
  stack: Tech[];
};

const Stack = ({ heading, subheading, stack }: TStack) => {
  return (
    <div className="md:col-span-2 flex flex-col gap-4">
      <div>
        <h3 className="font-semibold text-xl">{heading}</h3>
        <p className="text-md text-muted-foreground">{subheading}</p>
      </div>
      <article className="flex flex-wrap gap-4">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-row gap-2 items-center justify-center bg-muted px-2 py-1 rounded-lg"
          >
            <Image
              src={tech.src}
              alt={tech.name + ' icon'}
              width={30}
              height={30}
            />
            <p className="text-center">{tech.name}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export const InteractiveStacks = () => {
  const [stackStatus, setStackStatus] = useState(true);
  const current: TStack = stackStatus
    ? {
        stack: frontend,
        heading: 'Interactive and responsive web application development.',
        subheading:
          'Implement modern component libraries and connect APIs for client use.',
      }
    : {
        stack: backend,
        heading: 'APIs and Server-side web application development.',
        subheading:
          'Design secure API endpoints and efficient database queries and mutations.',
      };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      <div className="md:col-span-1 flex flex-col gap-4">
        <Button
          className={cn(
            'h-16 uppercase space-x-2',
            stackStatus ? 'border-primary' : null
          )}
          variant="outline"
          onClick={() => setStackStatus(true)}
        >
          <div
            className={cn(
              'w-10 h-10 flex items-center justify-center rounded-full',
              stackStatus ? 'bg-primary text-primary-foreground' : null
            )}
          >
            <DesktopIcon />
          </div>
          <span>Frontend</span>
        </Button>
        <Button
          className={cn(
            'h-16 uppercase space-x-2 ',
            !stackStatus ? 'border-primary' : null
          )}
          variant="outline"
          onClick={() => setStackStatus(false)}
        >
          <div
            className={cn(
              'w-10 h-10 flex items-center justify-center rounded-full',
              !stackStatus ? 'bg-primary text-primary-foreground' : null
            )}
          >
            <RocketIcon />
          </div>
          <span>Backend</span>
        </Button>
      </div>
      <Stack
        stack={current.stack}
        heading={current.heading}
        subheading={current.subheading}
      />
    </div>
  );
};
