'use client';
import { Box } from '@chakra-ui/react';
import ReviewItem from './ReviewItem';
import styles from './ReviewItem.module.css';

const ReviewList = ({ reviews }) => {
  return (
    <Box overflowX="hidden">
      <Box className={styles.slider} whiteSpace="nowrap">
        <Box display="inline-block">
          {reviews.map((review) => (
            <Box
              display="inline-block"
              whiteSpace="wrap"
              key={review.id}
              w="370px"
              maxW="80vw"
              pb="16px"
              mx="12px"
            >
              <ReviewItem reviewerId={review.id} reviewerName={review.name} />
            </Box>
          ))}
        </Box>
        <Box display="inline-block">
          {reviews.map((review) => (
            <Box
              display="inline-block"
              whiteSpace="wrap"
              key={review.id}
              w="370px"
              maxW="80vw"
              pb="16px"
              mx="12px"
            >
              <ReviewItem reviewerId={review.id} reviewerName={review.name} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewList;
