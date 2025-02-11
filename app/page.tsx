import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <Image
        src='/profile.png'
        alt='Profile photo'
        className='rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0'
        // unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className='mb-8 text-2xl font-medium tracking-tight'>
        Hi, I&apos;m Wint Phyo Paing!
      </h1>
      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          I&apos;m a full-stack developer who builds scalable APIs and creates
          dynamic front-end experiences. I work with a range of technologies,
          staying language and framework-agnostic to choose the best tools for
          the job.
        </p>
      </div>
    </section>
  );
}
