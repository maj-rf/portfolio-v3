import { StaticImageData } from 'next/image';
import engage from './assets/p_fengage.png';
import hyphy from './assets/p_hyphy.png';
import muni from './assets/p_muni.png';
import pretendster from './assets/p_pretendster.png';

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
  | 'Prisma'
  | 'TanStack Query'
  | 'TanStack Table'
  | 'React-router';

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
      'Prisma',
    ],
    live: 'https://pretendster-mono.onrender.com/',
    repo: 'https://github.com/bananabread08/pretendster',
  },
  {
    title: 'Fengage Calc',
    description:
      'Compute your Stat Growths! Stat Calculator for the Nintendo Switch Game, Fire Emblem Engage',
    img: engage,
    tags: ['TypeScript', 'React', 'NextJS', 'TanStack Table'],
    live: 'https://fengage-calc.vercel.app/',
    repo: 'https://github.com/bananabread08/fengage-calc',
  },
  {
    title: 'Muni',
    description:
      'Full Stack Blogging Web App. Share your thoughts in the platform. Powered by TinyMCE editor.',
    img: muni,
    tags: ['TypeScript', 'React', 'TanStack Query', 'Express', 'MongoDB'],
    live: 'https://muni-api.onrender.com/',
    repo: 'https://github.com/bananabread08/myblog-client',
  },
  {
    title: 'Hyphy',
    description:
      'Simple Frontend E-Commerce Site inspired by Nuphy that captures the online shopping experience.',
    img: hyphy,
    tags: ['TypeScript', 'React', 'React-router'],
    live: 'https://hyphy.vercel.app/',
    repo: 'https://github.com/bananabread08/hyphy',
  },
];

export const frontend: Tech[] = [
  { name: 'JavaScript', src: '/assets/javascript.svg' },
  { name: 'TypeScript', src: '/assets/typescript.svg' },
  { name: 'React', src: '/assets/react.svg' },
  { name: 'NextJS', src: '/assets/nextjs.svg' },
  { name: 'Sass', src: '/assets/sass.svg' },
  { name: 'Tailwind', src: '/assets/tailwindcss.svg' },
];
export const backend: Tech[] = [
  { name: 'Node.JS', src: '/assets/nodejs.svg' },
  { name: 'Firebase', src: '/assets/firebase.svg' },
  { name: 'Express', src: '/assets/express.svg' },
  { name: 'MongoDB', src: '/assets/mongodb.svg' },
  { name: 'MySQL', src: '/assets/mysql.svg' },
  { name: 'Prisma', src: '/assets/prisma.svg' },
];
