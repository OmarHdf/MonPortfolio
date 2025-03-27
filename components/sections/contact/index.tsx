'use client';
import { Globe } from 'lucide-react';
import ChatAssistant from './chat-assistant';
import { ContactForm } from './contact-form';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import useCurSection from '@/hooks/use-cur-section';
import Image from 'next/image';
import logo from '@/public/imgs/logo.webp';

export default function ContactSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.5);
  return (
    <div
      ref={ref}
      id='contact'
      className='w-full flex flex-col items-center container py-32'
    >
      <Image
        src={logo}
        alt='Contact'
        width={150}
        height={150}
        className='my-4'
      />
      <h1 className='text-center text-2xl md:text-4xl  mb-12'>
        <span className='text-gradient-primary'>{'{ '}</span>
        Contact Me
        <span className='text-gradient-primary'>{' }'}</span>
      </h1>
      <div className='flex items-center gap-6 flex-col lg:flex-row justify-around w-full h-full'>
        <div className='flex flex-col items-center gap-2 text-center min-w-[320px] w-full max-w-[450px]'>
          <ChatAssistant />
        </div>

        <motion.div
          layout
          className='max-w-[450px] w-full min-w-[320px] h-[500px] rounded-2xl bg-muted border overflow-hidden'
        >
          <div className='flex justify-between flex-shrink-0 px-4 pt-2'>
            <div className='flex items-center gap-2 text-muted-foreground'>
              <Globe size={18} />
              <span>Contact Me</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='block rounded-full size-3 bg-green-500 ml-auto' />
              <span className='block rounded-full size-3 bg-yellow-500' />
              <span className='block rounded-full size-3 bg-red-500 ' />
            </div>
          </div>
          <div className='p-6'>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
