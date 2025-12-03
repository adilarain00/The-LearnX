import { FC } from 'react';
import styles from '../../styles/styles';
import {
  FaShieldAlt,
  FaLock,
  FaUserCheck,
  FaDatabase,
  FaCheckCircle,
} from 'react-icons/fa';
import { privacyCards } from '@/app/static/data';

const Privacy: FC = () => {
  return (
    <section
      className={styles.combineStyles(
        styles.sectionStyles.container,
        styles.sectionStyles.paddingLarge,
        'flex flex-col justify-center'
      )}
    >
      <header className='text-center mb-20 max-w-3xl mx-auto'>
        <h1 className={styles.combineStyles(styles.titleStyles.h1, 'mb-5')}>
          Privacy &{' '}
          <span className={styles.utilityStyles.textAccent}>Policy</span>
        </h1>
        <p
          className={styles.combineStyles(
            styles.titleStyles.subtitleLarge,
            'text-gray-600 dark:text-gray-300 leading-relaxed text-base'
          )}
        >
          At LearnX, your trust is our foundation. We safeguard your personal
          data with industry-leading security practices and maintain complete
          transparency in how we use and protect your information.
        </p>
      </header>

      <div className='grid md:grid-cols-3 gap-10 mb-24'>
        {[
          {
            icon: FaShieldAlt,
            title: 'Secure by Design',
            text: 'Every feature in LearnX is built with privacy-first architecture, ensuring your data remains safe and encrypted.',
          },
          {
            icon: FaUserCheck,
            title: 'You’re in Control',
            text: 'Access, update, or delete your personal information anytime through your account settings.',
          },
          {
            icon: FaDatabase,
            title: 'Encrypted Storage',
            text: 'Your data is encrypted both in transit and at rest using modern cryptographic standards.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={styles.combineStyles(
              styles.cardStyles.base,
              styles.cardStyles.paddingLarge,
              'rounded-xl shadow-md hover:shadow-xl transition bg-white dark:bg-slate-800 text-center space-y-4'
            )}
          >
            <item.icon
              size={42}
              className={styles.utilityStyles.textAccent + ' mx-auto mb-2'}
            />
            <h3 className={styles.titleStyles.h4}>{item.title}</h3>
            <p className='text-gray-600 dark:text-gray-300'>{item.text}</p>
          </div>
        ))}
      </div>

      <div className='max-w-4xl mx-auto mb-20 text-center'>
        <h2 className={styles.combineStyles(styles.titleStyles.h2, 'mb-4')}>
          Why Your Data Matters
        </h2>
        <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
          Data helps us personalize your learning journey, enhance course
          recommendations, evaluate course quality, and continuously improve the
          platform. We collect only the information required to deliver an
          exceptional learning experience.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mb-28'>
        {privacyCards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className={styles.combineStyles(
                styles.cardStyles.base,
                styles.cardStyles.paddingLarge,
                'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition'
              )}
            >
              <div className='flex items-center gap-3 mb-5'>
                <Icon size={32} className={styles.utilityStyles.textAccent} />
                <h3 className={styles.titleStyles.h5}>{card.title}</h3>
              </div>

              <ul className='space-y-3'>
                {card.items.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-3 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-lg border border-slate-200 dark:border-slate-800'
                  >
                    <FaCheckCircle
                      className={
                        styles.utilityStyles.textAccent +
                        ' w-4 h-4 shrink-0 mt-1'
                      }
                    />
                    <span className='text-sm leading-relaxed'>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <footer className='max-w-3xl mx-auto text-center'>
        <p
          className={styles.combineStyles(
            'text-sm leading-relaxed',
            styles.utilityStyles.textMuted
          )}
        >
          By continuing to use LearnX, you agree to our privacy practices. This
          policy may be updated periodically, and we encourage you to revisit
          this page to stay informed about how we protect your data.
        </p>
      </footer>
    </section>
  );
};

export default Privacy;
