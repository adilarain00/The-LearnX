import { reviews } from '@/app/static/data';
import styles, { combineStyles } from '@/app/styles/styles';
import ReviewCarousel from '../review/ReviewCard';

type Props = {};

const Reviews = (props: Props) => {
  return (
    <section
      className={combineStyles(
        styles.sectionStyles.backgroundDefault,
        'py-16 lg:py-20'
      )}
    >
      <div className={styles.sectionStyles.container}>
        <div className='text-center mb-8 lg:mb-10'>
          <h2 className={combineStyles(styles.titleStyles.h2, 'mb-6')}>
            The Voices Behind Our{' '}
            <span className={combineStyles(styles.utilityStyles.textAccent)}>
              Success
            </span>
          </h2>

          <p
            className={combineStyles(
              styles.titleStyles.subtitle,
              'max-w-3xl mx-auto leading-relaxed'
            )}
          >
            See how learners have grown through expert-led lessons, real
            projects, and structured learning paths. Their journeys inspire us
            to keep innovating and improving LearnX.
          </p>
        </div>

        <ReviewCarousel />
      </div>
    </section>
  );
};

export default Reviews;
