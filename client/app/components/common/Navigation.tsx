'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItemsData } from '@/app/static/data';

interface NavigationProps {
  isMobile: boolean;
}

const Navigation: FC<NavigationProps> = ({ isMobile }) => {
  const pathname = usePathname();
  const activeItem = navItemsData.findIndex((item) => item.url === pathname);

  return (
    <>
      <div className='hidden 800px:flex'>
        {navItemsData.map((item, index) => (
          <Link
            href={item.url}
            key={item.url}
            className={`${
              activeItem === index
                ? 'text-purple-500 dark:text-purple-500'
                : 'dark:text-white text-black'
            } text-[17px] px-5 font-[400] cursor-pointer hover:text-purple-400 dark:hover:text-purple-500 transition-colors`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {isMobile && (
        <div className='800px:hidden mt-5'>
          <div className='w-full text-center py-6'>
            <Link
              href='/'
              className='text-[25px] font-[500] text-black dark:text-white'
            >
              LearnX
            </Link>
          </div>
          {navItemsData.map((item, index) => (
            <Link
              href={item.url}
              key={item.url}
              className={`${
                activeItem === index
                  ? 'text-purple-500'
                  : 'dark:text-white text-black'
              } block py-5 text-[18px] px-6 font-[400] cursor-pointer hover:text-purple-400 transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
