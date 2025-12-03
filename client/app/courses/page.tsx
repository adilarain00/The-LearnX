'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles, { combineStyles } from '@/app/styles/styles';
import { MdOutlineSentimentDissatisfied } from 'react-icons/md';
import { useGetLayoutDataQuery } from '@/redux/features/layout/layoutApi';
import { CourseCard, Footer, Header, Loader, PageHead } from '../components';
import { useGetAllPublicCoursePreviewsQuery } from '@/redux/features/courses/coursesApi';

type Props = {};

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get('title');
  const [open, setOpen] = useState(false);
  const [courses, setcourses] = useState([]);
  const [route, setRoute] = useState('Login');
  const [category, setCategory] = useState('All');

  const { data: coursesData, isLoading } = useGetAllPublicCoursePreviewsQuery(
    undefined,
    {}
  );
  const { data: categoriesData } = useGetLayoutDataQuery('Categories', {});

  useEffect(() => {
    if (category === 'All') {
      setcourses(coursesData?.courses);
    }
    if (category !== 'All') {
      setcourses(
        coursesData?.courses.filter((item: any) => item.categories === category)
      );
    }
    if (search) {
      setcourses(
        coursesData?.courses.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [coursesData, category, search]);
  const categories = categoriesData?.layout?.categories;

  return (
    <>
      <PageHead
        title='Browse All Courses | LearnX'
        description='Explore a wide range of courses on LearnX. Find the best programming, technology, and professional courses to boost your skills and career.'
        keywords='LearnX, courses, programming, Adil Amjad LMS'
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          <main
            className={`${styles.sectionStyles.container} min-h-[70vh] mt-32`}
          >
            <section className='mb-12'>
              <h1 className={styles.titleStyles.h2 + ' text-center mb-2'}>
                Unlock
                <span
                  className={combineStyles(styles.utilityStyles.textAccent)}
                >
                  {' '}
                  In-Demand
                </span>{' '}
                Expertise
              </h1>
              <p
                className={
                  styles.titleStyles.subtitle + ' text-center max-w-2xl mx-auto'
                }
              >
                Gain practical, industry-aligned knowledge through expertly
                designed courses that elevate your career.
              </p>
            </section>
            <div className='w-full flex items-left flex-wrap justify-left mb-8'>
              <button
                className={styles.combineStyles(
                  styles.buttonStyles.base,
                  category === 'All'
                    ? styles.buttonStyles.primary
                    : styles.buttonStyles.secondary,
                  styles.buttonStyles.small,
                  'm-2 px-4'
                )}
                onClick={() => setCategory('All')}
              >
                All
              </button>
              {categories &&
                categories.map((item: any, index: number) => (
                  <button
                    key={index}
                    className={styles.combineStyles(
                      styles.buttonStyles.base,
                      category === item.title
                        ? styles.buttonStyles.primary
                        : styles.buttonStyles.secondary,
                      styles.buttonStyles.small,
                      'm-2 px-4'
                    )}
                    onClick={() => setCategory(item.title)}
                  >
                    {item.title}
                  </button>
                ))}
            </div>
            {courses && courses.length === 0 && (
              <div className='flex flex-col items-center justify-center min-h-[40vh]'>
                <MdOutlineSentimentDissatisfied className='text-4xl text-slate-400 dark:text-slate-500 mb-2' />
                <p className='text-xl text-slate-500 dark:text-slate-400 text-center'>
                  {search
                    ? 'No courses found!'
                    : 'No courses found in this category. Please try another one!'}
                </p>
              </div>
            )}
            <div className='w-full max-w-[1500px] mx-auto grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-[32px] lg:grid-cols-3 lg:gap-[32px] 1500px:grid-cols-4 1500px:gap-[40px] mb-16'>
              {courses &&
                courses.map((item: any, index: number) => (
                  <CourseCard item={item} key={index} />
                ))}
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Page;
