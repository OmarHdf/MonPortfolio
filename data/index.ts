import { Github, Linkedin, Youtube } from 'lucide-react';

import cw from '@/public/projects-imgs/cw.webp';
import retrocech from '@/public/projects-imgs/retrocech.webp';
import ecommerce from '@/public/projects-imgs/e-commerce.webp';
import lukaskadela from '@/public/projects-imgs/lukaskadela.webp';

const data = {
  home: {
    name: 'Omar El Hedfi',
    description:
      'Empowering Code with Automation ⚙️ | #DevOps #AI #CloudNative #Coding',
    cvLink:
      'https://drive.google.com/file/d/1zoXGMwgizxMh3oH_hVwpM7hFqREOppgG/view?usp=drive_link',
  },
  sidebar: {
    links: [
      {
        name: 'github',
        link: 'https://github.com/OmarHdf',
        icon: Github,
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/omarelhedfi/',
        icon: Linkedin,
      },
      {
        name: 'youtube',
        link: 'https://www.youtube.com/channel/UCsKB5IwBz2MHwzIxjD1GY-g',
        icon: Youtube,
      },
    ],
  },
  projects: {
    projects: [
      {
        id: 1,
        title: 'Medina-Website',
        description:
          'Medina-Website is a professional showcase site deployed through an automated DevSecOps-AI pipeline, featuring security scans (Trivy, Dockle, Hadolint, Dependency-Check) and Kubernetes deployment. An AI layer (LLaMA3.2 via Ollama) is integrated to automatically generate readable summaries of security reports at each CI/CD pipeline execution.',
        image: cw,
        previewLink: 'https://github.com/OmarHdf/Medina-Website.git',
      },
      {
        id: 2,
        title: 'My Portfolio',
        description:
          'A professional portfolio built with Next.js, Tailwind CSS, and React.js to showcase skills, projects, and DevSecOps expertise.',
        image: retrocech,
        previewLink: 'https://github.com/OmarHdf/my-website.git',
      },
      {
        id: 3,
        title: 'E-commerce Platform',
        description:
          'Worked on an e-commerce platform focusing on secure payments and cloud deployments. \n\n Technologies Used: Next.js, React.js, Tailwind CSS, Stripe API.',
        image: ecommerce,
        previewLink: 'https://x-kom.pl',
      },
      {
        id: 4,
        title: 'Portfolio Website',
        description:
          'A polished website showcasing skills, projects, and secure coding practices. \n\n Technologies Used: Next.js, React.js, CSS.',
        image: lukaskadela,
        previewLink: 'https://lukaskadela.com',
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: 'html',
        src: '/skills/html.svg',
        link: 'https://en.wikipedia.org/wiki/HTML',
      },
      {
        id: 2,
        name: 'css',
        src: '/skills/css.svg',
        link: 'https://en.wikipedia.org/wiki/CSS',
      },
      {
        id: 3,
        name: 'javascript',
        src: '/skills/javascript.svg',
        link: 'https://en.wikipedia.org/wiki/JavaScript',
      },
      {
        id: 4,
        name: 'typescript',
        src: '/skills/typescript.svg',
        link: 'https://en.wikipedia.org/wiki/TypeScript',
      },
      {
        id: 5,
        name: 'react',
        src: '/skills/react.svg',
        link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
      },
      {
        id: 6,
        name: 'tailwind',
        src: '/skills/tailwind.svg',
        link: 'https://en.wikipedia.org/wiki/Tailwind_CSS',
      },
      {
        id: 7,
        name: 'nextJS',
        src: '/skills/nextJS.svg',
        link: 'https://en.wikipedia.org/wiki/Next.js',
      },
      {
        id: 8,
        name: 'postgresql',
        src: '/skills/postgresql.svg',
        link: 'https://en.wikipedia.org/wiki/PostgreSQL',
      },
      {
        id: 9,
        name: 'Jenkins',
        src: '/skills/Jenkins.svg',
        link: 'https://en.wikipedia.org/wiki/Jenkins_(software)',
      },
      {
        id: 10,
        name: 'git',
        src: '/skills/git.svg',
        link: 'https://en.wikipedia.org/wiki/Git',
      },
      {
        id: 11,
        name: 'docker',
        src: '/skills/docker.svg',
        link: 'https://en.wikipedia.org/wiki/Docker_(software)',
      },
      {
        id: 12,
        name: 'figma',
        src: '/skills/figma.svg',
        link: 'https://en.wikipedia.org/wiki/Figma',
      },
      {
        id: 13,
        name: 'firebase',
        src: '/skills/firebase.svg',
        link: 'https://en.wikipedia.org/wiki/Firebase',
      },
      {
        id: 14,
        name: 'markdown',
        src: '/skills/markdown.svg',
        link: 'https://en.wikipedia.org/wiki/Markdown',
      },
      {
        id: 15,
        name: 'mongoDB',
        src: '/skills/mongoDB.svg',
        link: 'https://en.wikipedia.org/wiki/MongoDB',
      },
    ],
  },
  contact: {
    email: 'omarhedfi99@gmail.com',
    name: 'Omar El Hedfi',
  },
};

export default data;

