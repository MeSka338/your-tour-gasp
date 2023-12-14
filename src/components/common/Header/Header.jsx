import React, { useEffect, memo } from "react";
import Link from "next/link";

import s from "./Header.module.scss";

const Header = memo(
  ({
    isFixed,
    navRef,
    navAnimation,
    updateScroll,
    sectionRefList,
    scrollToAnimation,
  }) => {
    useEffect(() => {
      navAnimation();
      window.addEventListener("scroll", updateScroll);
    }, [navAnimation, updateScroll]);
    return (
      <header className={s.root}>
        <div
          className={
            isFixed
              ? `${s.headerNavWrapper} ${s.fixed}`
              : `${s.headerNavWrapper} `
          }
          style={{ overflow: "hidden" }}
        >
          <nav className={s.headerNav} ref={navRef}>
            <div className={s.logo}>
              <Link href="/" className={s.logoHref}>
                <img
                  src={
                    isFixed
                      ? "/header/YourTour-black.svg"
                      : "/header/YourTour-white.svg"
                  }
                  alt={s.mainLogo}
                  className={s.logoImg}
                />
              </Link>
            </div>
            <ul className={s.menu}>
              <li className={s.menuItem}>
                <a
                  className={s.menuLink}
                  onClick={() => scrollToAnimation(sectionRefList.selectTour)}
                >
                  Туры
                </a>
              </li>
              <li className={s.menuItem}>
                <a
                  className={s.menuLink}
                  onClick={() => scrollToAnimation(sectionRefList.form)}
                >
                  Создать тур
                </a>
              </li>
              <li className={s.menuItem}>
                <a
                  className={s.menuLink}
                  onClick={() => scrollToAnimation(sectionRefList.reviews)}
                >
                  Отзывы
                </a>
              </li>
              <li className={s.menuItem}>
                <a
                  className={s.menuLink}
                  onClick={() => scrollToAnimation(sectionRefList.stories)}
                >
                  Истории
                </a>
              </li>
            </ul>
            <p className={s.contact}>+7 999 999 99 99</p>
          </nav>
        </div>
      </header>
    );
  }
);

export default Header;
