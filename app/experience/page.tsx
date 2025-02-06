import type { Metadata } from 'next';
import { experiences } from './experience-data';

export const metadata: Metadata = {
  title: 'Experiences',
  description: 'My career journey as a software developer',
};

export default function Experiences() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-medium tracking-tight'>
        Explore my career journey as a software developer.
      </h1>
      <div className='space-y-6'>
        {experiences.map((project, index) => (
          <div
            key={index}
            className='block group hover:opacity-80 transition-opacity duration-200'
          >
            <div className='flex flex-col'>
              <div className='w-full flex justify-between items-baseline'>
                <div className='flex flex-col space-y-1'>
                  <span className='text-black dark:text-white font-medium tracking-tight'>
                    {project.title}
                  </span>
                  <span className='text-neutral-600 dark:text-neutral-400 tabular-nums text-sm'>
                    {project.employer}
                  </span>
                </div>
                <span className='text-neutral-600 dark:text-neutral-400 tabular-nums text-sm'>
                  {project.year}
                </span>
              </div>
              <p className='prose prose-neutral dark:prose-invert pt-3'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
