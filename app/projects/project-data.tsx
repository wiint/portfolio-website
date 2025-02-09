export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  teachStack: string[];
}

export const projects: Project[] = [
  {
    title: 'saungpokki.com.sg',
    year: 2024,
    description:
      'EdTech online learning platform powered by ILBC, designed for everyone passionate about education and language proficiency.',
    url: 'https://www.saungpokki.com.sg',
    teachStack: [
      'NestJS',
      'React Native',
      'Microservices',
      'Socket.io',
      'NextJS',
    ],
  },
  {
    title: 'ilbcquicklearn.com',
    year: 2024,
    description:
      'Free online platform for everyone to learn English. ILBC Quick Learn is designed to be there for you, helping you learn English on the go.',
    url: 'https://www.ilbcquicklearn.com',
    teachStack: ['NestJS', 'React Native', 'ffmpeg', 'Socket.io'],
  },
  {
    title: 'new-vision-edu.com',
    year: 2023,
    description:
      'New Vision Education Center provides students with rigorous education and the foundations of virtue and character, building knowledge and skills through content-rich curriculum in a well-prepared environment.',
    url: 'https://www.new-vision-edu.com',
    teachStack: ['Nestjs', 'MySQL', 'TypeORM', 'NextJS'],
  },
  {
    title: 'scholarconnect.asia',
    year: 2024,
    description:
      'Empowering students to achieve their educational goals by providing access to over 10,000 scholarships, grants and financial aid opportunities.',
    url: 'https://scholarconnect.asia',
    teachStack: ['NestJS', 'PostgreSQL', 'NextJS'],
  },
  {
    title: 'shwenoteapp.com',
    year: 2022,
    description:
      "ShweNote's website, focusing on a modern, responsive design that ensures a seamless experience across devices. The site was built to effectively showcase the brand and engage visitors with a clean, user-friendly interface.",
    url: 'https://www.shwenoteapp.com',
    teachStack: ['NextJS', 'Tailwind CSS'],
  },
];
