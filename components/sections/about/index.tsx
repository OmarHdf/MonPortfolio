'use client';
import useCurSection from '@/hooks/use-cur-section';
import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import agakadela from '@/public/imgs/agakadela-mini.webp';

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
              I'm Alex Muniz — I build solid software, and I fix what others leave broken.
            </strong>
            <br />
            <br />
            I work as a senior engineer, fast and focused. Mostly with{' '}
            <strong>
              React, React Native, Flutter, TypeScript, Laravel, Golang
            </strong>, and whatever else it takes to ship scalable, secure, and high-performance apps — mobile or web.
            <br />
            <br />
            Some clients bring me in to lead tech migrations or rebuild legacy systems. Others call when performance lags, code is insecure, or infrastructure needs stability and scale.
            <br />
            <br />
            Either way, I build clean, secure, and reliable software — the kind that lasts.
            <br />
            <br />
            <span className='font-semibold'>📌 What I Do Best:</span>
            <br />
            ✅ <strong>Secure development</strong> – Encryption, validation, and protecting data across frontend and backend.
            <br />
            ✅ <strong>Mobile apps</strong> – Flutter & React Native, efficient APIs, offline-ready performance.
            <br />
            ✅ <strong>Frontend engineering</strong> – React/Vue, clean UI/UX, accessibility, maintainability.
            <br />
            ✅ <strong>Modernization</strong> – Migrating legacy systems, Laravel/TypeScript/Golang refactors.
            <br />
            ✅ <strong>DevOps & Cloud</strong> – CI/CD, Docker, AWS, Azure, scalable infrastructure.
            <br />
            <br />
            <span className='font-semibold'>📌 Why Work With Me?</span>
            <br />
            🔹 I focus on real results, not just code. Your product should perform, scale, and be safe — I make sure it does.
            <br />
            🔹 I work fast and efficiently. No endless meetings or blockers — just clean solutions that work.
            <br />
            🔹 I don’t just fix problems — I prevent them. I build systems designed for scale, security, and long-term success.
            <br />
            <br />
            <span className='font-semibold'>📌 Let's Talk</span>
            <br />
            If your product needs fixing, scaling, or building from the ground up, let’s connect.
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
