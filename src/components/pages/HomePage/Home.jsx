import React, { memo } from 'react';
import Head from 'next/head';
import s from './Home.module.scss';

import Stories from './Stories';
import CustomCursor from '../../common/CustomCursor';
import HeroContainer from './Hero/HeroContainer';
import SelectTourContainer from './SelectTour/SelectTourContainer';
import TourFormContainer from './TourForm/TourFormContainer';
import ReviewsContainer from './Reviews/ReviewsContainer';
import TravelPhotoContainer from './TravelPhoto/TravelPhotoContainer';
import FooterContainer from '../../common/Footer/FooterContainer';

const Home = memo(
  ({
    // customCursor
    rootRef,
    cursoreMove,
    scaleAnimation,
    // hero
    sectionRefList,
    titleRef,
    titleAnimation,
    // Footer
    footerRef,
    arrowRef,
    arrowAnimtion,

    scrollToAnimation,
  }) => (
    <>
      <Head>
        <title>YourTour</title>
        <meta
          name="description"
          content="Сайт про путешествие"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/YT-main-icon.svg"
        />
      </Head>
      <main className={s.root}>
        <CustomCursor
          rootRef={rootRef}
          cursoreMove={cursoreMove}
          scaleAnimation={scaleAnimation}
        />

        <HeroContainer
          sectionRefList={sectionRefList}
          scrollToAnimation={scrollToAnimation}
        />
        <SelectTourContainer selectTourRef={sectionRefList.selectTour} />
        <TourFormContainer formRef={sectionRefList.form} />
        <ReviewsContainer reviewsRef={sectionRefList.reviews} />
        <TravelPhotoContainer />
        <Stories
          // sectionTitle
          titleRef={titleRef}
          titleAnimation={titleAnimation}
          storiesRef={sectionRefList.stories}
        />
        <FooterContainer
          footerRef={footerRef}
          arrowRef={arrowRef}
          arrowAnimtion={arrowAnimtion}
          heroRef={sectionRefList.hero}
          scrollToAnimation={scrollToAnimation}
        />
      </main>
    </>
  )
);

export default Home;
