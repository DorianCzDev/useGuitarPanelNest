import styled from "styled-components";
import { useReviews } from "../services/useReviews";
import { H1 } from "../ui/Headers";
import Spinner from "../ui/Spinner";
import TextExpander from "../ui/TextExpander";
import { useDeleteReportedReview } from "../services/useDeleteReportedReview";
import { useDeleteReviewFromReported } from "../services/useDeleteReviewFromReported";
import { useState } from "react";
import ReviewsPagination from "../ui/ReviewsPagination";

const Review = styled.div`
  margin: 0 0 20px 0;
  color: #e9e9e9;
  padding: 26px 22px 12px 22px;
  background-color: var(--primary-bg-color);
  border: 1px solid var(--primary-border-color);
  border-radius: 18px;
`;
const ReviewHeader = styled.header`
  display: flex;
  color: inherit;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 800;
  height: 40px;
  padding: 0px 10px 22px 10px;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--primary-border-color);
`;
const Span = styled.span`
  color: #e9e9e9;
`;

const DateSpan = styled(Span)`
  font-size: 14px;
  font-weight: 300;
  color: #888;
`;
const ReviewContent = styled.div`
  color: inherit;
  text-align: justify;
  padding: 16px 0 8px 0;
  font-size: 18px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--secondary-font-color);
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  font-size: 18px;
  &:hover {
    color: var(--primary-font-color);
  }
  &:first-of-type {
    border-right: 1px solid var(--primary-border-color);
  }
`;

function Reviews() {
  const [currPage, setCurrPage] = useState(1);

  const { reviews, reviewsCount, isLoading } = useReviews();
  const { deleteReportedReview } = useDeleteReportedReview();
  const { deleteReviewFromReported } = useDeleteReviewFromReported();

  return (
    <Wrapper>
      <H1>reported reviews</H1>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {reviews.map((review) => (
            <Review key={review._id}>
              <ReviewHeader>
                <DateSpan>{review.created_at.split("T")[0]}</DateSpan>
                <div>
                  <StyledButton
                    onClick={() => deleteReviewFromReported(review.id)}
                  >
                    leave
                  </StyledButton>

                  <StyledButton onClick={() => deleteReportedReview(review.id)}>
                    remove
                  </StyledButton>
                </div>
              </ReviewHeader>
              <ReviewContent>
                <TextExpander collapsedNumWords={30}>
                  {review.comment}
                </TextExpander>
              </ReviewContent>
            </Review>
          ))}
          <ReviewsPagination
            setCurrPage={setCurrPage}
            currPage={currPage}
            reviewsCount={reviewsCount}
          />
        </>
      )}
    </Wrapper>
  );
}

export default Reviews;
