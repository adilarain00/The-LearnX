'use client';
import React, { FC, useState } from 'react';
import {
  PageHead,
  Header,
  Hero,
  HomeCourses,
  Reviews,
  Faqs,
  Footer,
} from './components';
import { StatsSection, AboutSection } from './components/common';

type Props = object;

const Page: FC<Props> = (props) => {
  const [activeItem] = useState(0);
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState('Login');

  return (
    <>
      <PageHead
        title='LearnX | Online Learning Platform'
        description='LearnX is an interactive e-learning platform for students to learn, connect with teachers, and access educational resources. Discover courses, get academic help, and enhance your skills online.'
        keywords='Online Learning, Adil Amjad LMS, Adil Amjad Project, Student Help, Educational Resources, E-learning Platform, LearnX Admin'
      />
      <div>
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <div className='pt-[80px]'>
          <Hero />
          <StatsSection />
          <HomeCourses />
          <AboutSection />
          <Reviews />
          <Faqs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
