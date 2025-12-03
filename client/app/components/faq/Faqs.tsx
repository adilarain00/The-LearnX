'use client';

import { Loader } from '../common';
import { HiMinus, HiPlus } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import styles, { combineStyles } from '@/app/styles/styles';
import { useGetLayoutDataQuery } from '@/redux/features/layout/layoutApi';

type Props = {};

const Faqs = (props: Props) => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const { data, isLoading } = useGetLayoutDataQuery('FAQ', {});

  useEffect(() => {
    if (data) {
      setQuestions(data.layout?.faq);
    }
  }, [data]);

  const toggleQuestion = (id: string) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <section
      className={combineStyles(
        styles.sectionStyles.backgroundDefault,
        'py-16 pb-44'
      )}
    >
      <div className={styles.sectionStyles.container}>
        <div className='text-center mb-12'>
          <h1 className={combineStyles(styles.titleStyles.h2, 'mb-4')}>
            Frequently Asked{' '}
            <span className={styles.utilityStyles.textAccent}>Questions</span>
          </h1>
          <p
            className={combineStyles(
              styles.titleStyles.subtitle,
              'max-w-2xl mx-auto'
            )}
          >
            Get clear answers to the most common questions about our platform,
            courses, and learning experience.
          </p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className='max-w-4xl mx-auto space-y-4'>
            {questions?.map((q) => {
              const isActive = activeQuestion === q._id;

              return (
                <div
                  key={q._id}
                  className={`
                    rounded-2xl border border-slate-200 dark:border-slate-700
                    bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl
                    shadow-sm hover:shadow-md transition-all duration-300
                    p-6
                  `}
                >
                  <button
                    onClick={() => toggleQuestion(q._id)}
                    className='flex items-start justify-between w-full group'
                  >
                    <span
                      className={`
                        text-lg font-semibold leading-tight
                        transition-colors
                        text-slate-900 dark:text-slate-50
                        group-hover:text-purple-600 dark:group-hover:text-purple-400
                      `}
                    >
                      {q.question}
                    </span>

                    <div
                      className={`
                        flex items-center justify-center ml-4
                        w-9 h-9 rounded-full
                        transition-all duration-300
                        ${
                          isActive
                            ? 'bg-purple-600 text-white rotate-180'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20'
                        }
                      `}
                    >
                      {isActive ? (
                        <HiMinus className='h-4 w-4' />
                      ) : (
                        <HiPlus className='h-4 w-4' />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? 'max-h-[500px] mt-4' : 'max-h-0'
                    }`}
                  >
                    <p
                      className={`
                        text-slate-600 dark:text-slate-300 leading-relaxed
                        border-t border-slate-200 dark:border-slate-700 pt-4
                      `}
                    >
                      {q.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Faqs;
