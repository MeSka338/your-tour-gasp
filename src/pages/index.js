import React, { useEffect } from 'react';
import HomeContainer from '../components/pages/HomePage/HomeContainer';

const HomePage = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // eslint-disable-next-line unused-imports/no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <HomeContainer />
    </main>
  );
};

export default HomePage;
