'use client';
import { useState } from 'react';
import { Faqs, Footer, Header, PageHead } from '@/app/components';

const Page = () => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState('Login');

  return (
    <>
      <PageHead
        title={`LearnX - FAQ`}
        description='Frequently Asked Questions about LearnX. Get answers to common queries about our courses, features, and more.'
        keywords='Frequently Asked Questions, LearnX Faq, Adil Amjad LMS, Adil Amjad Project'
      />
      <Header
        route={route}
        setRoute={setRoute}
        open={open}
        setOpen={setOpen}
        activeItem={1}
      />
      <div className='pt-[80px]'>
        <Faqs />
      </div>
      <Footer />
    </>
  );
};

export default Page;
