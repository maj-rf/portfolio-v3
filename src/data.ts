import { StaticImageData } from 'next/image';
import engage from './assets/p_fengage.png';
import hyphy from './assets/p_hyphy.png';
import muni from './assets/p_muni.png';
import pretendster from './assets/p_pretendster.png';
import ulapdrive from './assets/p_ulapdrive.png';

export type Tech = {
  name: string;
  src: string;
};

export type Tag =
  | 'TypeScript'
  | 'React'
  | 'NextJS'
  | 'Node.JS'
  | 'Express'
  | 'MongoDB'
  | 'MySQL'
  | 'Prisma ORM'
  | 'TanStack Query'
  | 'TanStack Table'
  | 'React-router'
  | 'PostgreSQL'
  | 'Drizzle ORM';

export type Project = {
  title: string;
  description: string;
  img: StaticImageData;
  tags: Tag[];
  live?: string;
  repo: string;
};

export const projects: Project[] = [
  {
    title: 'Pretendster',
    description:
      'Social Media Web App combining some elements of Friendster, Facebook, and Twitter. Powered by Cloudinary for image storage.',
    img: pretendster,
    tags: [
      'TypeScript',
      'React',
      'React-router',
      'Express',
      'MongoDB',
      'Prisma ORM',
    ],
    live: 'https://pretendster-mono.onrender.com/',
    repo: 'https://github.com/maj-rf/pretendster',
  },
  {
    title: 'Muni',
    description:
      'Full Stack Blogging Web App. Share your thoughts in the platform. Powered by uiw/markdown-editor.',
    img: muni,
    tags: [
      'TypeScript',
      'React',
      'TanStack Query',
      'Express',
      'PostgreSQL',
      'Drizzle ORM',
    ],
    repo: 'https://github.com/maj-rf/muni',
  },
  {
    title: 'Ulapdrive',
    description:
      'A stripped-down version of Dropbox / Google Drive. Share your files privately or publicly!',
    img: ulapdrive,
    tags: ['TypeScript', 'React', 'TanStack Query', 'Express', 'MongoDB'],
    repo: 'https://github.com/maj-rf/muni',
  },
  {
    title: 'Fengage Calc',
    description:
      'Compute your Stat Growths! Stat Calculator for the Nintendo Switch Game, Fire Emblem Engage',
    img: engage,
    tags: ['TypeScript', 'React', 'NextJS', 'TanStack Table'],
    live: 'https://fengage-calc.vercel.app/',
    repo: 'https://github.com/maj-rf/fengage-calc',
  },
  {
    title: 'Hyphy',
    description:
      'Simple Frontend E-Commerce Site inspired by Nuphy that captures the online shopping experience.',
    img: hyphy,
    tags: ['TypeScript', 'React', 'React-router'],
    live: 'https://hyphy.vercel.app/',
    repo: 'https://github.com/maj-rf/hyphy',
  },
];

export const frontend: Tech[] = [
  { name: 'JavaScript', src: '/assets/javascript.svg' },
  { name: 'TypeScript', src: '/assets/typescript.svg' },
  { name: 'React', src: '/assets/react.svg' },
  { name: 'NextJS', src: '/assets/nextjs.svg' },
  { name: 'Tailwind', src: '/assets/tailwindcss.svg' },
];
export const backend: Tech[] = [
  { name: 'Node.JS', src: '/assets/nodejs.svg' },
  { name: 'Express', src: '/assets/express.svg' },
  { name: 'PostgreSQL', src: '/assets/postgres.svg' },
  { name: 'Drizzle ORM', src: '/assets/drizzle.png' },
  { name: 'Prisma ORM', src: '/assets/prisma.svg' },
  { name: 'MongoDB', src: '/assets/mongodb.svg' },
];
