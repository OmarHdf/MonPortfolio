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
            I&apos;m Omar El Hedfi — I build secure, scalable web solutions and automate the pipelines behind them.
</strong>
<br />
<br />I work full-stack, DevSecOps, and fast. Mostly with{' '}
<strong>Next.js, React, TypeScript, Docker, Kubernetes, Jenkins</strong>, and
whatever else it takes to deliver production-ready solutions. <br />
<br />
Some teams hire me to build from scratch. Others bring me in when{' '}
<strong>
  CI/CD pipelines fail, deployments break, security scans explode, or apps need AI-powered features
</strong>{' '}
to stay ahead. <br />
<br />
Either way, I make it clean, secure, and built to last.
<br />
<br />
<span className='font-semibold'>📌 What I Do Best:</span>
<br />✅ <strong>Build Secure Pipelines</strong> – CI/CD with Jenkins, Trivy, SonarQube, Hadolint, Dockle.
<br />✅ <strong>DevSecOps Automation</strong> – Docker/Kubernetes deployments, GitHub Actions, security-first workflows.
<br />✅ <strong>AI Integration</strong> – LLaMA, Gemini, OpenAI features like auto-report summaries and smart chat.
<br />✅ <strong>Full Stack Development</strong> – Next.js, React, TypeScript, REST APIs.
<br />✅ <strong>Performance Optimization</strong> – Faster builds, scalable infrastructure, clean architecture.
<br />
<br />
<span className='font-semibold'>📌 Why Work With Me?</span>
<br />
🔹 I combine development with **security and automation**—your apps run fast, scale safely, and pass audits.
<br />
🔹 I work efficiently—no endless loops, just working solutions.
<br />
🔹 I prevent future issues—everything is built to be **maintainable and future-proof**.
<br />
<br />
<span className='font-semibold'>📌 Let&apos;s Talk</span>
<br />
If you need **a secure pipeline, a scalable app, or AI-driven features**, let&apos;s connect.
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
