'use client';
import useCurSection from '@/hooks/use-cur-section';
import Image from 'next/image';
import { Fragment, useRef } from 'react';
import { motion } from 'framer-motion';
import agakadela from '@/public/imgs/agakadela_mini.jpg';

export default function AboutSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div
      ref={ref}
      id='about'
      className='w-full py-12 my-32 bg-muted text-sm md:text-base'
    >
      <h1 className='text-center text-3xl md:text-5xl mb-12'>
        <span className='text-gradient-primary'>{'{ '}</span>
        About Me
        <span className='text-gradient-primary'>{' }'}</span>
      </h1>

      <div className='flex gap-9 items-center flex-col  w-10/12 mx-auto p-5 rounded-lg container'>
        <div className='relative flex-shrink-0'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeIn' }}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl'
          />
          <motion.div
            initial={{ x: '-200%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='rounded-full size-[200px] bg-gradient-primary p-0.5'
          >
            <Image
              className='size-full rounded-full grayscale hover:grayscale-0 transition-all object-cover'
              width={600}
              height={600}
              alt='about profile image'
              src={agakadela}
            />
          </motion.div>
        </div>

        <div className='space-y-4 text-center lg:text-left'>
          <h2 className='text-xl md:text-3xl font-bold'>
            <span className='text-secondary'>{'< '}</span>

            <span className='text-gradient-secondary'>Who am I</span>
            <span className='text-secondary'>{' />'}</span>
          </h2>
          <motion.p
            initial={{ y: '-20%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: 'easeIn', duration: 0.5 }}
            className='text-muted-foreground text-justify'
          >
            Hey, I’m Aga Kadela, a Next.js & React developer who helps
            businesses fix, optimize, scale, and build high-performance web
            applications. If your app is slow, buggy, struggling to scale, or
            missing key AI-driven features—I can help.
            <br />
            <br />
            <span className='font-semibold'>📌 What I Do Best:</span>
            <br />
            ✅ Fixing Bugs & Broken Code – Debugging, API issues, UI glitches
            that frustrate users.
            <br />
            ✅ Optimizing Performance – Speeding up apps, improving SEO, and
            delivering a smooth experience.
            <br />
            ✅ Scaling Web Apps – Making sure your app grows without downtime or
            technical limits.
            <br />
            ✅ Building from Scratch – Creating fast, scalable, and future-proof
            Next.js applications.
            <br />
            ✅ AI-Powered Features – Automating workflows, integrating chatbots,
            and enhancing user engagement.
            <br />
            <br />
            <span className='font-semibold'>📌 Why Work With Me?</span>
            <br />
            🔹 I focus on real results, not just code. Your web app should run
            fast, handle traffic, and grow without breaking—I make sure it does.
            <br />
            🔹 I work fast and efficiently. No endless back-and-forth, no
            unnecessary delays—just solutions that work.
            <br />
            🔹 I don’t just fix problems—I prevent them. Whether optimizing an
            existing app or building something new, I ensure it’s scalable,
            maintainable, and built for the long run.
            <br />
            <br />
            <span className='font-semibold'>📌 Let&apos;s Talk</span>
            <br />
            If your app needs fixing, optimizing, scaling, or building,
            let&apos;s connect.
            <br />
            <a href='#contact' className='text-primary hover:underline'>
              ✅ Get in Touch
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
