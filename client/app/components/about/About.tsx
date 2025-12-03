import React from 'react';
import styles from '../../styles/styles';
import { features } from '../../static/data';
import {
  FaChalkboardTeacher,
  FaWallet,
  FaUsers,
  FaCheckCircle,
} from 'react-icons/fa';

const About = () => {
  return (
    <section
      className={styles.combineStyles(
        styles.sectionStyles.container,
        styles.sectionStyles.paddingLarge,
        'min-h-[80vh] flex flex-col justify-center'
      )}
    >
      <div className='text-center mb-12'>
        <h2
          className={
            styles.titleStyles.h2 + ' mb-4 text-purple-600 dark:text-purple-400'
          }
        >
          Welcome to
          <span
            className={styles.combineStyles(styles.utilityStyles.textAccent)}
          >
            {' '}
            LearnX
          </span>
        </h2>
        <p
          className={
            styles.titleStyles.subtitleLarge +
            ' max-w-2xl mx-auto text-slate-700 dark:text-slate-300'
          }
        >
          Your journey to becoming a confident programmer starts here. Discover
          simple, affordable, and community-driven learning designed for
          everyone.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        {features.map((f) => {
          const iconMap: Record<
            string,
            React.ComponentType<{ size?: number; className?: string }>
          > = {
            FaChalkboardTeacher,
            FaWallet,
            FaUsers,
          };
          const Icon = iconMap[f.icon as string];
          return (
            <article
              key={f.title}
              className={styles.combineStyles(
                styles.cardStyles.base,
                styles.cardStyles.paddingLarge,
                'flex flex-col items-center text-center bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200'
              )}
            >
              <div className='mb-3'>
                {Icon && (
                  <Icon size={32} className={styles.utilityStyles.textAccent} />
                )}
              </div>
              <h3
                className={styles.combineStyles(
                  styles.titleStyles.h5,
                  'mb-2',
                  styles.utilityStyles.textAccent
                )}
              >
                {f.title}
              </h3>
              <ul
                className={styles.combineStyles(
                  styles.utilityStyles.spacingSmall,
                  'list-none pl-0'
                )}
              >
                <li
                  className={styles.combineStyles(
                    'flex items-center p-2 rounded-md',
                    'bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 mb-2'
                  )}
                >
                  <span className='text-sm'>{f.desc}</span>
                </li>
              </ul>
            </article>
          );
        })}
      </div>

      <div className='text-center mb-12'>
        <h3 className={styles.titleStyles.h3 + ' mb-4'}>
          Choose Your Learning Path
        </h3>
        <p
          className={
            styles.titleStyles.subtitleLarge +
            ' max-w-2xl mx-auto text-slate-700 dark:text-slate-300'
          }
        >
          LearnX ensures quality education at prices students can truly afford.
          Pick the plan that fits your goals.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
        <div
          className={styles.combineStyles(
            styles.cardStyles.base,
            styles.cardStyles.paddingLarge,
            'rounded-xl shadow-md bg-white dark:bg-slate-800 text-center border border-slate-200 dark:border-slate-700'
          )}
        >
          <h4 className={styles.titleStyles.h4 + ' mb-3'}>Starter / Basic</h4>
          <p className='text-2xl font-bold mb-4'>
            Free <span className='text-base font-normal'>/ forever</span>
          </p>
          <ul className='space-y-3 mb-6 text-sm'>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Access to free courses
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Community support
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Beginner-friendly lessons
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Interactive exercises
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Limited project access
            </li>
          </ul>
          <button className='px-6 py-2 rounded-lg bg-purple-700 text-white dark:bg-purple-600 hover:opacity-90 transition'>
            Get Started
          </button>
        </div>

        <div
          className={styles.combineStyles(
            styles.cardStyles.base,
            styles.cardStyles.paddingLarge,
            'rounded-xl shadow-md bg-white dark:bg-slate-800 text-center border border-slate-200 dark:border-slate-700'
          )}
        >
          <h4
            className={
              styles.titleStyles.h4 + ' mb-3 text-black dark:text-white'
            }
          >
            Pro / Advanced
          </h4>
          <p className='text-2xl font-bold mb-4'>
            Rs. 999 <span className='text-base font-light'>/ month</span>
          </p>
          <ul className='space-y-3 mb-6 text-sm'>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              All LearnX courses
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Project-based learning
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Priority instructor support
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Access to exclusive resources
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Lifetime access
            </li>
          </ul>
          <button className='px-6 py-2 rounded-lg bg-purple-700 text-white dark:bg-purple-600 hover:opacity-90 transition'>
            Upgrade Now
          </button>
        </div>

        <div
          className={styles.combineStyles(
            styles.cardStyles.base,
            styles.cardStyles.paddingLarge,
            'rounded-xl shadow-md bg-white dark:bg-slate-800 text-center border border-slate-200 dark:border-slate-700'
          )}
        >
          <h4 className={styles.titleStyles.h4 + ' mb-3'}>Team / Group</h4>
          <p className='text-2xl font-bold mb-4'>
            Rs. 699 <span className='text-base font-normal'>/ person</span>
          </p>
          <ul className='space-y-3 mb-6 text-sm'>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Group discounts
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Private sessions
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Team progress tracking
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Dedicated support
            </li>
            <li className='flex items-center justify-left gap-2'>
              <FaCheckCircle className='text-green-500' />
              Customizable learning paths
            </li>
          </ul>
          <button className='px-6 py-2 rounded-lg bg-purple-700 text-white dark:bg-purple-600 hover:opacity-90 transition'>
            Contact Us
          </button>
        </div>
      </div>

      <div className='text-center mt-10'>
        <p
          className={
            styles.titleStyles.subtitleLarge +
            ' max-w-6xl mx-auto mb-2 text-slate-700 dark:text-slate-300'
          }
        >
          At LearnX, our mission is to make programming accessible and enjoyable
          for all. Whether you&apos;re just starting out or advancing your
          skills, we&apos;re here to support your growth every step of the way.
          We believe in a world where everyone has the opportunity to learn and
          grow in the world of technology.
        </p>
        <br />
        <p
          className={
            styles.titleStyles.subtitleLarge +
            ' max-w-6xl mx-auto mb-2 text-slate-700 dark:text-slate-300'
          }
        >
          Our platform brings together curated courses, interactive learning
          tools, and a supportive community to help you stay motivated and
          consistent. With a focus on in-demand tech roles and evolving industry
          needs, we equip learners with the knowledge, confidence, and hands-on
          experience required to excel in today’s competitive job market. At
          LearnX, your learning success isn’t just a goal—it’s our priority.
        </p>
      </div>
    </section>
  );
};

export default About;
