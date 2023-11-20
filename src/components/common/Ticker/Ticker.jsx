import React, { useEffect } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const ScrollingImagesWithSwiper = ({ imagePaths }) => {
  useEffect(() => {
    const swiper = new SwiperCore(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {imagePaths.map((imagePath, index) => (
          <div className="swiper-slide" key={index}>
            <img src={imagePath} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default ScrollingImagesWithSwiper;
