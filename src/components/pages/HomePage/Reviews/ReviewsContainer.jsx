import React, { memo, useRef, useState } from "react";
import gsap from "gsap";
import Reviews from "./Reviews";

const ReviewsContainer = memo(({ reviewsRef }) => {
  return <Reviews reviewsRef={reviewsRef} />;
});

export default ReviewsContainer;
