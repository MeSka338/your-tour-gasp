import React, { useRef, useEffect, memo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import s from "./Form.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Form = memo(({ form, formAnimation }) => {
  useEffect(() => {
    formAnimation();
  }, []);
  return (
    <form className={s.tour_form__form} ref={form}>
      <div className={s.form_container}>
        <div className={s.form_grid}>
          <div className={s.form_element}>
            <p className={s.form_element__title}>Имя</p>
            <input
              type="text"
              className={`${s.form_element__input} ${s.input}`}
              placeholder="Введите Ваше имя"
            />
          </div>
          <div className={s.form_element}>
            <p className={s.form_element__title}>Направление</p>
            <img className={s.arrow} src="/tour-form/downArrow.svg" alt="dr" />
            <select
              required
              className={`${s.form_element__input} ${s.select}`}
              name="path"
              id="paht"
            >
              <option value="DEFAULT" disabled selected hidden>
                Куда хотите ехать
              </option>
              <option value="1">Европа</option>
              <option value="2">Азия</option>
              <option value="3">Африка</option>
              <option value="4">Северная Америка</option>
              <option value="5">Южная Америка</option>
              <option value="6">Австралия</option>
            </select>
          </div>
          <div className={s.form_element}>
            <p className={s.form_element__title}>Email</p>
            <input
              type="email"
              className={`${s.form_element__input} ${s.input}`}
              placeholder="example@mail.com"
            />
          </div>
          <div className={s.form_element}>
            <p className={s.form_element__title}>Телефон</p>
            <input
              type="tel"
              className={`${s.form_element__input} ${s.input}`}
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
            />
          </div>
          <div className={s.form_element}>
            <p className={s.form_element__title}>Дата от</p>
            <input
              type="date"
              className={`${s.form_element__input} ${s.input}`}
              placeholder="ДД.ММ.ГГГГ"
            />
          </div>
          <div className={s.form_element}>
            <p className={s.form_element__title}>Дата до</p>
            <input
              type="date"
              className={`${s.form_element__input} ${s.input}`}
              placeholder="ДД.ММ.ГГГГ"
            />
          </div>
        </div>
        <div className={s.form_element}>
          <p className={`${s.form_element__title} ${s.comment_title}`}>
            Комментарий
          </p>
          <textarea
            className={`${s.form_element__input} ${s.comment}`}
          ></textarea>
        </div>

        <div className={s.age_check}>
          <p className={s.age_check__title}>Вам есть 18 лет?</p>
          <input
            className={`${s.age_check__radio} ${s.input} ${s.radio}`}
            type="radio"
            name="ansuer"
            id="yes"
          />
          <div className={s.fake_radio_container}>
            <label htmlFor="yes" className={s.fake_radio}></label>
            <label className={s.radio_label} htmlFor="yes">
              Да
            </label>
          </div>
          <input
            className={`${s.input} ${s.radio}`}
            type="radio"
            name="ansuer"
            id="no"
          />
          <div className={s.fake_radio_container}>
            <label htmlFor="no" className={s.fake_radio}></label>
            <label className={s.radio_label} htmlFor="no">
              Нет
            </label>
          </div>
        </div>
        <div className={s.license_agreemt}>
          <input
            className={s.checkbox}
            type="checkbox"
            id="check"
            name="licen"
          />
          <label className={s.checkbox_label} htmlFor="check"></label>
          <p className={s.checkbox_title}>
            Нажимая кнопку, я принимаю условия{" "}
            <a href="/" className={s.link}>
              Лицензионного договора
            </a>
          </p>
        </div>
        <div className={s.buttons}>
          <button className={`${s.submit} ${s.form_btn}`} type="submit">
            Найти тур
          </button>
          <button className={`${s.reset} ${s.form_btn}`} type="reset">
            Сбросить
          </button>
        </div>
      </div>
    </form>
  );
});

export default Form;
