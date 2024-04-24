import About from '@/components/About/About';
import Banner from '@/components/banner/Banner';
import Feature from '@/components/feature/Feature';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner/>
      <About></About>
      <Feature></Feature>
    </div>
  );
};

export default page;