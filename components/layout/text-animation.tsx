import { motion } from 'framer-motion';

export default function TextAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='overflow-hidden relative'>
      <motion.div
        className='absolute top-0 left-0 h-full w-full bg-gradient-primary origin-left'
        initial={{ scaleX: 1 }}
        animate={{ scaleX: [1, 0] }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
