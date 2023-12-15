import React, { memo } from 'react';
import Reviews from './Reviews';

const ReviewsContainer = memo(({ reviewsRef }) => {
  return <Reviews reviewsRef={reviewsRef} />;
});

export default ReviewsContainer;
