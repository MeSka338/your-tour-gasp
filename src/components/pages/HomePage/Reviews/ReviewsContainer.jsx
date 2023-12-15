import React, { memo } from 'react';
import Reviews from './Reviews';

const ReviewsContainer = memo(({ reviewsRef }) => (
  <Reviews reviewsRef={reviewsRef} />
));

export default ReviewsContainer;
