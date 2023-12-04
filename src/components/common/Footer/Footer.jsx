import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import s from "./Footer.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ footerRef, arrowRef, arrowAnimtion }) => {
 
  useEffect(() => {
    arrowAnimtion();
  }, []);

  return (
    <footer className={s.root} ref={footerRef}>
      <Link href={"#"} className={s.arrow} ref={arrowRef}>
        <span className={s.arrow_icon}></span>
      </Link>
      <div className={s.footer_container}>
        <img
          src="/footer/footer photo.jpg"
          alt="footer img"
          className={s.footer__img}
        />
        <div className={s.footer__content}>
          <h3 className={s.footer__title}>Пора в путешествие вместе с нами!</h3>
          <p className={s.footer__subtitle}>
            Напиши на почту и узнай подробности
            <br />
            на{" "}
            <a href="/" className={s.link}>
              yourtour@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className={s.contacts_container}>
        <div className={s.footer__contacts}>
          <p className={s.contacts__title}>Наши социальные сети</p>
          <div className={`${s.contacts__socials} ${s.socials}`}>
            <div className={`${s.contacts__item} ${s.socials__item}`}>
              <img
                className={s.contacts__icon}
                src="/footer/instagram-icon.png"
                alt=""
              />
              <a href="/" className={s.socials__title}>
                instagram
              </a>
            </div>

            <div className={`${s.contacts__item} ${s.socials__item}`}>
              <img
                className={s.contacts__icon}
                src="/footer/facebook-icon.png"
                alt=""
              />
              <a href="/" className={s.socials__title}>
                facebook
              </a>
            </div>

            <div className={`${s.contacts__item} ${s.socials__item}`}>
              <img
                className={s.contacts__icon}
                src="/footer/vk-icon.png"
                alt=""
              />
              <a href="/" className={s.socials__title}>
                vkontakte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
