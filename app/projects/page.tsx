import type { Metadata } from 'next';
import { projects } from './project-data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'I love to build!',
};

export default function Projects() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-medium tracking-tight'>
        I love to build!
      </h1>
      <div className='space-y-6'>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block group hover:opacity-80 transition-opacity duration-200'
          >
            <div className='flex flex-col'>
              <div className='w-full flex justify-between items-baseline'>
                <span className='text-black dark:text-white font-medium tracking-tight'>
                  {project.title}
                </span>
              </div>
              <p className='prose prose-neutral dark:prose-invert pt-3'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 pt-2'>
                {project.teachStack.map((tech) => (
                  <div
                    key={tech}
                    className='rounded-md border border-gray-400 dark:border-[#636363] px-2.5 py-0.5 text-xs font-semibold text-black dark:text-white'
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
