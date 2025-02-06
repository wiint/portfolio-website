export interface Experience {
  title: string;
  employer: string;
  year: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: 'Backend Developer',
    employer: 'ILBC',
    year: 'Dec 2023 - Present',
    description:
      'Contributing to the development, enhancement, and maintenance of scalable Learning Management Systems (LMS) and other software solutions that empower both educators and learners. Designed and developed web and mobile applications using Node.js, React and React Native (Expo).',
  },
  {
    title: 'Fullstack Developer',
    employer: 'Idea Offshore',
    year: 'Aug 2022 - Dec 2023',
    description: 'Development and maintenance of web applications.',
  },
  {
    title: 'Frontend Developer',
    employer: 'Shopdoora Ecommerce',
    year: 'Jul 2022 - Aug 2023',
    description:
      'Responsible for the frontend of B2B e-commerce websites featuring member point systems and providing seamless shopping experiences, mainly using JavaScript, Typescript and React in an agile development.',
  },
];
