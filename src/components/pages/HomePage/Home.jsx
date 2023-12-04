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
  ReviewAnimation,
  // sectionsTitle
  titleRef,
  TitleAnimation,
  // modalAnimation
  ModalAnimation,
  modalRef,
  // SelectTour
  menuArr,
  TourTitleRef,
  listRef,
  Change,
  TourTitleAnimation,
  ListAnimation,
  cardsRef,
  CardsRef,
  // TourForm

  form,
  formAnimation,
  // TourPhoto
  gallery_1Ref,
  gallery_2Ref,
  gallery_3Ref,
  setIsTablet,
  GalleryAnimation,
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
          TourTitleRef={TourTitleRef}
          listRef={listRef}
          Change={Change}
          TourTitleAnimation={TourTitleAnimation}
          ListAnimation={ListAnimation}
          CardsRef={CardsRef}
          cardsRef={cardsRef}
        />
        <TourForm
          titleRef={titleRef}
          TitleAnimation={TitleAnimation}
          form={form}
          formAnimation={formAnimation}
        />
        <Reviews
          textRef={textRef}
          click={click}
          setClick={setClick}
          isModal={isModal}
          setIsModal={setIsModal}
          ReviewAnimation={ReviewAnimation}
          // sectionsTitle
          titleRef={titleRef}
          TitleAnimation={TitleAnimation}
          // modalAnimation
          modalRef={modalRef}
          ModalAnimation={ModalAnimation}
        />
        <TravelPhoto
          gallery_1Ref={gallery_1Ref}
          gallery_2Ref={gallery_2Ref}
          gallery_3Ref={gallery_3Ref}
          setIsTablet={setIsTablet}
          GalleryAnimation={GalleryAnimation}
        />
        <Stories />
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
