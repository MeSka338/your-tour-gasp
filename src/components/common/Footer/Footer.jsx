import React, { memo, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import s from "./Footer.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Footer = memo(
  ({ footerRef, arrowRef, arrowAnimtion, heroRef, scrollToAnimation }) => {
    useEffect(() => {
      arrowAnimtion();
    }, []);

    return (
      <footer className={s.root} ref={footerRef}>
        <a
          className={s.arrow}
          ref={arrowRef}
          onClick={() => scrollToAnimation(heroRef)}
        >
          <span className={s.arrowIcon}></span>
        </a>
        <div className={s.footerContainer}>
          <img
            src="/footer/footer photo.jpg"
            alt="footer img"
            className={s.footerImg}
          />
          <div className={s.footerContent}>
            <h3 className={s.footerTitle}>Пора в путешествие вместе с нами!</h3>
            <p className={s.footerSubtitle}>
              Напиши на почту и узнай подробности
              <br />
              на{" "}
              <a href="/" className={s.link}>
                yourtour@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className={s.contactsContainer}>
          <div className={s.footerContacts}>
            <p className={s.contactsTitle}>Наши социальные сети</p>
            <div className={`${s.contactsSocials} ${s.socials}`}>
              <div className={`${s.contactsItem} ${s.socials__item}`}>
                <img
                  className={s.contactsIcon}
                  src="/footer/instagram-icon.png"
                  alt=""
                />
                <a href="/" className={s.socialsTitle}>
                  instagram
                </a>
              </div>

              <div className={`${s.contactsItem} ${s.socials__item}`}>
                <img
                  className={s.contactsIcon}
                  src="/footer/facebook-icon.png"
                  alt=""
                />
                <a href="/" className={s.socialsTitle}>
                  facebook
                </a>
              </div>

              <div className={`${s.contactsItem} ${s.socials__item}`}>
                <img
                  className={s.contactsIcon}
                  src="/footer/vk-icon.png"
                  alt=""
                />
                <a href="/" className={s.socialsTitle}>
                  vkontakte
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer;
