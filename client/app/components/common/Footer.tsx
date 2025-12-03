'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer className='border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900'>
      <div className='mx-auto max-w-7xl px-6 py-10'>
        <div className='flex flex-col lg:flex-row justify-between gap-10 items-start mb-16'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl font-bold text-purple-600 dark:text-purple-400'>
              LearnX
            </h2>
            <p className='mt-2 text-slate-600 dark:text-slate-300 leading-relaxed text-base'>
              LearnX empowers learners with high-quality courses, structured
              learning paths, and real-world projects designed to help you
              master in-demand skills and accelerate your tech career.
            </p>
          </div>

          <div className='w-full max-w-md'>
            <h3 className='text-lg font-semibold text-slate-800 dark:text-white mb-2'>
              Unlock Exclusive Updates & Resources
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-300 mb-6'>
              Quick insights, updates, and learning tips—delivered to you.
            </p>
            {!submitted ? (
              <form
                onSubmit={handleSubscribe}
                className='flex items-center gap-3'
              >
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='flex-1 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm focus:ring-2 focus:ring-purple-500 outline-none'
                />
                <button
                  type='submit'
                  className='px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition text-sm'
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className='text-green-600 dark:text-green-400 font-medium text-sm'>
                🎉 You’re subscribed successfully!
              </p>
            )}
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12'>
          <div>
            <h4 className='text-lg font-semibold text-slate-800 dark:text-white mb-4'>
              Explore
            </h4>
            <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
              <li>
                <Link href='/' className='footer-link'>
                  All Courses
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Certifications
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Skill Tracks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold text-slate-800 dark:text-white mb-4'>
              Resources
            </h4>
            <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
              <li>
                <Link href='/' className='footer-link'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Articles
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Support Center
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold text-slate-800 dark:text-white mb-4'>
              For Instructors
            </h4>
            <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
              <li>
                <Link href='/' className='footer-link'>
                  Teach on LearnX
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Creator Tools
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Course Requirements
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold text-slate-800 dark:text-white mb-4'>
              Company
            </h4>
            <ul className='space-y-2 text-slate-600 dark:text-slate-300'>
              <li>
                <Link href='/' className='footer-link'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/' className='footer-link'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className='border-slate-200 dark:border-slate-700 mb-6' />

        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-slate-600 dark:text-slate-400'>
            © {new Date().getFullYear()} LearnX — Empowering your learning
            journey.
          </p>

          <div className='flex gap-4'>
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className='w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white transition cursor-pointer'
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
