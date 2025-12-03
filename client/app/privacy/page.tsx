'use client';
import React, { useState } from 'react';
import { Privacy, Footer, Header, PageHead } from '../components';

type Props = {};

const Page = (props: Props) => {
  const [activeItem] = useState(2);
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState('Login');

  return (
    <div>
      <PageHead
        title='Privacy Policy | LearnX'
        description="Read LearnX's privacy policy to understand how we protect your personal information, data, and privacy as you use our learning management system."
        keywords='LearnX, privacy policy, data protection, user privacy, Adil Amjad LMS, security, LMS, learning management system'
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div className='pt-[80px]'>
        <Privacy />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
