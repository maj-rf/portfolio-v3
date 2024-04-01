import React from 'react';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';

const thisYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-4xl m-auto px-10 pb-6 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between w-full gap-4">
          <div className="flex gap-4 items-center">
            <a
              href="mailto:rmkfermin@gmail.com"
              target="_blank"
              title="Send email to Maj Fermin"
            >
              <EnvelopeClosedIcon width={25} height={25} />
            </a>
            <a
              href="https://github.com/maj-rf"
              target="_blank"
              title="Github profile of Maj Fermin "
            >
              <GitHubLogoIcon width={25} height={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/ralph-majed-keene-fermin-601575231/"
              target="_blank"
              title="LinkedIn profile of Maj Fermin "
            >
              <LinkedInLogoIcon width={25} height={25} />
            </a>
          </div>
          <p className="text-sm flex items-center">{`© ${thisYear}  maj-rf. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};
