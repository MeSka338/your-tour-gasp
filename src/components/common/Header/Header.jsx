import React, { useState, useEffect, useRef } from "react";
import s from "./Header.module.scss";
import gsap from "gsap";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef();
  let tl = gsap.timeline();
  const navAnimation = () => {
    gsap.fromTo(
      navRef.current.children,
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        ease: "power1.easeOut",
        opacity: 1,
        stagger: {
          each: 0.4,
          from: "start",
        },

        duration: 1,
      }
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    navAnimation();
  }, []);

  const updateScroll = () => {
    if (window.scrollY >= 450) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  return (
    <header className={s.root}>
      <div
        className={
          isFixed
            ? `${s.header__nav_wrapper} ${s.fixed}`
            : `${s.header__nav_wrapper} `
        }
        style={{ overflow: "hidden" }}
      >
        <nav className={s.header__nav} ref={navRef}>
          <div className={s.logo}>
            <a href="/" className={s.logo__href}>
              <img
                src={
                  isFixed
                    ? "/header/YourTour-black.svg"
                    : "/header/YourTour-white.svg"
                }
                alt={s.main_logo}
                className={s.logo__img}
              />
            </a>
          </div>
          <ul className={s.menu}>
            <li className={s.menu__item}>
              <a href="/" className={s.menu__link}>
                Туры
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="/" className={s.menu__link}>
                Создать тур
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="/" className={s.menu__link}>
                Отзывы
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="/" className={s.menu__link}>
                Истории
              </a>
            </li>
          </ul>

          <p className={s.contact}>+7 999 999 99 99</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
