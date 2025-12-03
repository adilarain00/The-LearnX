'use client';
import {
  EnrolledCourseContent,
  Footer,
  Header,
  Loader,
  PageHead,
} from '@/app/components';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';

type Props = {
  params: any;
};

const Page = ({ params }: Props) => {
  const id = params.id;
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState('Login');
  const { isLoading, error, data } = useLoadUserQuery(undefined, {});

  useEffect(() => {
    if (data) {
      const isPurchased = data.user.courses.find(
        (item: any) => item._id === id
      );
      if (!isPurchased) {
        redirect('/');
      }
    }
    if (error) {
      redirect('/');
    }
  }, [id, data, error]);

  return (
    <>
      <PageHead
        title={`Course Access | LearnX`}
        description={`Access your purchased course and continue learning on LearnX.`}
        keywords={`course access, purchased course, online learning, Adil Amjad LMS, LearnX`}
      />
      {isLoading ? (
        <Loader />
      ) : data && data.user ? (
        <>
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          <div className='pt-[80px]'>
            <EnrolledCourseContent id={id} user={data.user} />
          </div>
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Page;
