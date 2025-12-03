import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles, { combineStyles } from '@/app/styles/styles';

const AboutSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={combineStyles(
        styles.sectionStyles.backgroundDefault,
        'w-full py-20 bg-white dark:bg-slate-900'
      )}
    >
      <div className='max-w-7xl mx-auto px-6 md:px-10 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight'>
              Empowering Growth with{' '}
              <span className='font-bold text-purple-600 dark:text-purple-400'>
                LearnX
              </span>
            </h2>

            <p className='text-lg text-slate-600 dark:text-slate-300 leading-relaxed'>
              LearnX is designed to help learners build real skills, gain
              confidence, and stay ahead in today’s rapidly evolving industry.
              We combine expert-driven lessons with hands-on practice, making
              learning more meaningful and result-oriented.
            </p>

            <p className='text-lg text-slate-600 dark:text-slate-300 leading-relaxed'>
              Our platform ensures a structured learning path, modern tools, and
              support that helps students transform knowledge into
              opportunities. Whether you are beginning your journey or leveling
              up professionally, LearnX grows with you.
            </p>
          </div>

          <div className='flex justify-center lg:justify-end'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='w-full max-w-lg rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10'
            >
              <Image
                src='/assets/about.jpg'
                alt='LearnX learning illustration'
                width={1000}
                height={800}
                className='object-cover w-full h-72 sm:h-80 md:h-96'
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                unoptimized
              />
              <noscript>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/assets/about.jpg'
                  alt='LearnX learning illustration'
                  className='object-cover w-full h-72 sm:h-80 md:h-96'
                />
              </noscript>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
