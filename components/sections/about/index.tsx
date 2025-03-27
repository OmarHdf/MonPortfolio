'use client';
import useCurSection from '@/hooks/use-cur-section';
import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import agakadela from '@/public/imgs/agakadela_mini.webp';

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
              className='size-full rounded-full grayscale-0 object-cover'
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
            className='text-muted-foreground'
          >
            <strong>
              I&apos;m Aga Kadela — I build software that works, and I fix the
              stuff that doesn&apos;t.
            </strong>
            <br />
            <br />I work solo, full-stack, and fast. Mostly with{' '}
            <strong>Next.js, React, Supabase, Tailwind, TypeScript</strong>, and
            whatever else it takes to get the job done right. <br />
            <br />
            Some people hire me to build from scratch. Others bring me in when
            things are broken —{' '}
            <strong>
              slow apps, half-built MVPs, ChatGPT-generated code, or no-code
              experiments
            </strong>{' '}
            that hit their limit. <br />
            <br />
            Either way, I build it clean and make sure it runs the way it
            should.
            <br />
            <br />
            <span className='font-semibold'>📌 What I Do Best:</span>
            <br />✅ <strong>Fix broken code</strong> – Debugging, crashes,
            broken logic, and AI/LLM features that don&apos;t work right.
            <br />✅ <strong>Improve performance</strong> – Speed, Lighthouse,
            Core Web Vitals, smooth UX, fast data.
            <br />✅ <strong>Scale apps properly</strong> – Clean architecture,
            database upgrades, API optimization.
            <br />✅ <strong>Build from zero</strong> – Full-stack Next.js +
            Typescript apps, custom dashboards, and workflows.
            <br />
            ✅ AI Features – Gemini/OpenAI-powered chat, content tools,
            automations, vector search.
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
