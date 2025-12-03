'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Loader } from '../common';
import styles from '../../styles/styles';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import { useGetLayoutDataQuery } from '@/redux/features/layout/layoutApi';

type Props = {};

const Hero: FC<Props> = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetLayoutDataQuery('Banner', {});
  const bannerImage = data?.layout?.banner?.image?.url || '/assets/heroImg.png';

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/courses?title=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={styles.combineStyles(
            styles.sectionStyles.backgroundDefault,
            'max-h-screen flex items-center justify-center relative'
          )}
          style={{
            backgroundImage: `url(${bannerImage})`,

            backgroundSize: '50% auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className={`
              relative z-10
              max-w-3xl w-full mx-auto text-center px-6
              flex flex-col items-center justify-center
              py-20 md:py-28 lg:py-28 space-y-7
            `}
          >
            <div className='space-y-5'>
              <h1
                className={`
                  ${styles.titleStyles.h1} leading-tight
                  text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight
                  text-slate-900 dark:text-white
                `}
              >
                {data?.layout?.banner?.title ? (
                  data.layout.banner.title
                ) : (
                  <>
                    Master{' '}
                    <span className={styles.utilityStyles.textAccent}>
                      In-Demand Skills
                    </span>{' '}
                    with LearnX
                  </>
                )}
              </h1>

              <p
                className={`
                  ${styles.titleStyles.subtitle}
                  max-w-xl mx-auto
                  text-base sm:text-lg leading-relaxed
                  text-gray-700 dark:text-gray-300
                `}
              >
                {data?.layout?.banner?.subTitle ||
                  'Learn from industry experts and build real-world projects — all in one powerful platform built to accelerate your growth.'}
              </p>
            </div>

            <div className='relative w-full max-w-md mx-auto'>
              <input
                type='search'
                placeholder='Search Courses...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='
                  w-full h-12 px-4 pr-14
                  text-base text-gray-700 bg-white dark:bg-gray-700 dark:text-white
                  border border-gray-300 dark:border-gray-600
                  rounded-xl shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-purple-500
                  transition
                '
              />
              <button
                type='submit'
                onClick={handleSearch}
                className='
                  absolute right-1 top-1
                  h-10 w-10 rounded-lg
                  flex items-center justify-center
                  bg-purple-600 hover:bg-purple-700
                  transition text-white
                '
              >
                <BiSearch size={22} />
              </button>
            </div>

            <div className='flex items-center gap-4 justify-center pt-2'>
              <div className='flex -space-x-2'>
                {['client1', 'client2', 'client3'].map((img, i) => (
                  <Image
                    key={i}
                    src={`/assets/${img}.png`}
                    alt={`Student ${i + 1}`}
                    width={42}
                    height={42}
                    className='
                      w-10 h-10 rounded-full
                      border-2 border-white dark:border-gray-800
                      shadow-md object-cover
                    '
                  />
                ))}
              </div>

              <p className='text-gray-600 dark:text-gray-300 text-base leading-tight'>
                <span className='font-semibold text-purple-600'>500K+</span>{' '}
                learners trust our platform.{' '}
                <Link
                  href='/courses'
                  className='text-purple-600 hover:underline'
                >
                  View Courses
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
