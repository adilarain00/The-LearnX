'use client';

import styles, { combineStyles } from '@/app/styles/styles';
import React from 'react';

const stats = [
  { id: 1, value: '10,000+', label: 'Students' },
  { id: 2, value: '120+', label: 'Courses' },
  { id: 3, value: '5,000+', label: 'Reviews' },
  { id: 4, value: '98%', label: 'Satisfaction' },
];

export default function StatsSection() {
  return (
    <section
      aria-label='LearnX statistics'
      className={combineStyles(
        styles.sectionStyles.backgroundDefault,
        'py-16 lg:py-24'
      )}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-transparent'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((s) => (
            <div
              key={s.id}
              className='group w-full max-w-md sm:max-w-lg mx-auto bg-white/60 dark:bg-transparent backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-start gap-2 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl'
            >
              <div className='flex items-center gap-3 w-full'>
                <div className='flex-1'>
                  <div className='text-3xl sm:text-4xl font-extrabold leading-none text-slate-900 dark:text-white'>
                    {s.value}
                  </div>
                  <div className='mt-1 text-sm text-slate-600 dark:text-slate-300'>
                    {s.label}
                  </div>
                </div>
                <div className='ml-3 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 p-3 shadow-md'>
                  <svg
                    className='w-5 h-5 text-white'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 2v6' />
                    <path d='M12 22v-6' />
                    <path d='M2 12h6' />
                    <path d='M22 12h-6' />
                  </svg>
                </div>
              </div>
              <p className='mt-3 text-sm text-slate-500 dark:text-slate-400'>
                Trusted by learners worldwide — concise, modern, and built for
                results.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
