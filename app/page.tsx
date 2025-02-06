import Image from 'next/image';
import { socialLinks } from './config';

export default function Page() {
  return (
    <section>
      <Image
        src='/profile.jpg'
        alt='Profile photo'
        className='rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0'
        unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className='mb-8 text-2xl font-medium tracking-tight'>
        Hi, I&apos;m Wint Phyo Paing!
      </h1>
      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          I&apos;m a Node.js backend developer who builds scalable APIs and also
          crafts dynamic front-end experiences using React, React Native and
          Next.js.
        </p>
        <p>
          I believe in creating simple, intuitive, and performant websites that
          deliver great user experiences. Whether it&apos;s front-end
          development, back-end solutions, or full-stack applications, I bring
          attention to detail in everything I build.
        </p>
        <p>
          Feel free to explore, and don&apos;t hesitate to reach out if
          you&apos;d like to collaborate or have any questions!
        </p>
      </div>
    </section>
  );
}
