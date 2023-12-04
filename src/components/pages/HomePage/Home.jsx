import React, { useState, useEffect } from "react";
import s from "./Home.module.scss";
import Hero from "./Hero";
import SelectTour from "./SelectTour/SelectTour";
import TourForm from "./TourForm";
import Reviews from "./Reviews/Reviews";
import TravelPhoto from "./TravelPhoto";
import Stories from "./Stories";
import Head from "next/head";

const Home = ({
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
}) => {
  return (
    <>
      <Head>
        <title>YourTour</title>
        <meta name="description" content="Сайт про путешествие" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/YT-main-icon.svg" />
      </Head>
      <div className={s.root}>
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
        <TravelPhoto />
        <Stories />
      </div>
    </>
  );
};

export default Home;
