/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillStar, AiOutlineStar, AiOutlineMessage } from 'react-icons/ai';

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Ayesha Khan',
      role: 'BSCS Student',
      rating: 5,
      comment:
        'LearnX helped me understand complex topics like DSA and React in a very simple way. The structured roadmap and weekly tasks kept me consistent. I feel more confident in my coding journey after joining.',
      avatar:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      course: 'Frontend Development',
    },
    {
      id: 2,
      name: 'Hamza Ali',
      role: 'Computer Science Undergraduate',
      rating: 5,
      comment:
        'The best part is the real-world projects. I finally built applications that I can add to my portfolio. The mentors explain everything clearly and support you whenever you get stuck.',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      verified: true,
      course: 'MERN Stack Bootcamp',
    },
    {
      id: 3,
      name: 'Sarah Ahmed',
      role: 'Final Year Student',
      rating: 5,
      comment:
        'I always struggled with JavaScript basics, but LearnX made everything easy. The animations, examples, and quizzes improved my learning speed. Highly recommended for beginners.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      course: 'JavaScript & ES6+',
    },
    {
      id: 4,
      name: 'Abdullah Rauf',
      role: '1st Semester Student',
      rating: 5,
      comment:
        'LearnX gave me a strong foundation at the beginning of my degree. The community support and weekly meetups helped me stay on track and motivated throughout the course.',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      verified: true,
      course: 'Programming Fundamentals',
    },
    {
      id: 5,
      name: 'Fatima Noor',
      role: 'Aspiring Software Engineer',
      rating: 5,
      comment:
        'This is the best learning platform for students who want structured learning. Every lesson is clear, practical, and easy to understand. Loved the UI and overall learning experience.',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      verified: true,
      course: 'Full Stack Development',
    },
    {
      id: 6,
      name: 'Muhammad Hassan',
      role: 'Self-taught Programmer',
      rating: 5,
      comment:
        'The step-by-step explanation style helped me fill all the missing concepts I had. The quizzes and coding exercises felt like a real classroom experience but more effective.',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      course: 'Backend Development',
    },
    {
      id: 7,
      name: 'Zara Sheikh',
      role: 'IT Student',
      rating: 5,
      comment:
        'LearnX courses improved both my theory and practical knowledge. The instructors give real-world insights that you won’t find in normal university lectures. Great value!',
      avatar:
        'https://images.unsplash.com/photo-1529626493887-3425a59c3543?w=150&h=150&fit=crop&crop=face',
      verified: true,
      course: 'Computer Fundamentals',
    },
    {
      id: 8,
      name: 'Bilal Ahmed',
      role: 'Diploma Student',
      rating: 5,
      comment:
        'This platform helped me catch up with modern technologies. The learning speed is perfect, and the community always helps you whenever you get stuck on assignments.',
      avatar:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=face',
      verified: true,
      course: 'Web Development Basics',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className='w-full pb-16'>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative'>
          <div className='relative h-[400px] overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='absolute inset-0 flex items-center justify-center'
              >
                <div className='max-w-3xl mx-auto'>
                  <div className='bg-white rounded-2xl shadow-xl p-10 text-center relative'>
                    <div className='absolute -top-6 left-1/2 -translate-x-1/2'>
                      <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                        <AiOutlineMessage className='text-white text-xl' />
                      </div>
                    </div>

                    <p className='text-lg sm:text-xl text-gray-700 leading-relaxed italic mb-6'>
                      “{reviews[currentIndex].comment}”
                    </p>

                    <div className='flex items-center justify-center gap-1 mb-4'>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                          {i < reviews[currentIndex].rating ? (
                            <AiFillStar className='text-yellow-400 text-xl' />
                          ) : (
                            <AiOutlineStar className='text-gray-300 text-xl' />
                          )}
                        </span>
                      ))}
                    </div>

                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
                      <img
                        src={reviews[currentIndex].avatar}
                        alt={reviews[currentIndex].name}
                        className='w-16 h-16 rounded-full object-cover border-4 border-white shadow-md'
                      />

                      <div className='text-center sm:text-left'>
                        <h4 className='font-bold text-lg text-black'>
                          {reviews[currentIndex].name}
                        </h4>
                        <p className='text-sm text-gray-600'>
                          {reviews[currentIndex].role}
                        </p>
                        <p className='text-xs text-blue-600 font-medium'>
                          Course: {reviews[currentIndex].course}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-md'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-md'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>

          <div className='flex justify-center mt-4 gap-2'>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125'
                    : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
