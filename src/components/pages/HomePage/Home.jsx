import React, { useState, useEffect } from "react";
import s from "./Home.module.scss";
import Hero from "./Hero";
import SelectTour from "./SelectTour/SelectTour";
import TourForm from "./TourForm";
import Reviews from "./Reviews/Reviews";
import TravelPhoto from "./TravelPhoto";
import Stories from "./Stories";
import Head from "next/head";
import Footer from "../../common/Footer";
import CustomCursor from "../../common/CustomCursor";

const Home = ({
  // customCursor

  rootRef,
  cursoreMove,
  scaleAnimation,
  // hero
  heraderRef,
  subtitleRef,
  buttonRef,
  headerAnimation,
  buttonAnimation,
  subtitleAnimation,
  // header
  isFixed,
  navRef,
  navAnimation,
  updateScroll,
  // review
  textRef,
  click,
  setClick,
  isModal,
  setIsModal,
  reviewAnimation,
  // sectionsTitle
  titleRef,
  titleAnimation,
  // modalAnimation
  modalAnimation,
  modalRef,
  // SelectTour
  menuArr,
  tourTitleRef,
  listRef,
  onChange,
  tourTitleAnimation,
  listAnimation,
  cardsRef,
  cardsAnimation,
  // TourForm

  form,
  formAnimation,
  // TourPhoto
  gallery1Ref,
  gallery2Ref,
  gallery3Ref,
  setIsTablet,
  galleryAnimation,
  // Footer
  footerRef,
  arrowRef,
  arrowAnimtion,
}) => {
  return (
    <>
      <Head>
        <title>YourTour</title>
        <meta name="description" content="Сайт про путешествие" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/YT-main-icon.svg" />
      </Head>
      <main className={s.root}>
        <CustomCursor
          rootRef={rootRef}
          cursoreMove={cursoreMove}
          scaleAnimation={scaleAnimation}
        />

        <Hero
          heraderRef={heraderRef}
          subtitleRef={subtitleRef}
          buttonRef={buttonRef}
          headerAnimation={headerAnimation}
          buttonAnimation={buttonAnimation}
          subtitleAnimation={subtitleAnimation}
          // header
          isFixed={isFixed}
          navRef={navRef}
          navAnimation={navAnimation}
          updateScroll={updateScroll}
        />
        <SelectTour
          menuArr={menuArr}
          tourTitleRef={tourTitleRef}
          listRef={listRef}
          onChange={onChange}
          tourTitleAnimation={tourTitleAnimation}
          listAnimation={listAnimation}
          cardsAnimation={cardsAnimation}
          cardsRef={cardsRef}
        />
        <TourForm
          titleRef={titleRef}
          titleAnimation={titleAnimation}
          form={form}
          formAnimation={formAnimation}
        />
        <Reviews
          textRef={textRef}
          click={click}
          setClick={setClick}
          isModal={isModal}
          setIsModal={setIsModal}
          reviewAnimation={reviewAnimation}
          // sectionsTitle
          titleRef={titleRef}
          titleAnimation={titleAnimation}
          // modalAnimation
          modalRef={modalRef}
          modalAnimation={modalAnimation}
        />
        <TravelPhoto
          // sectionsTitle
          titleRef={titleRef}
          titleAnimation={titleAnimation}
          //
          gallery1Ref={gallery1Ref}
          gallery2Ref={gallery2Ref}
          gallery3Ref={gallery3Ref}
          setIsTablet={setIsTablet}
          galleryAnimation={galleryAnimation}
        />
        <Stories
          // sectionTitle
          titleRef={titleRef}
          titleAnimation={titleAnimation}
        />
        <Footer
          footerRef={footerRef}
          arrowRef={arrowRef}
          arrowAnimtion={arrowAnimtion}
        />
      </main>
    </>
  );
};

export default Home;
