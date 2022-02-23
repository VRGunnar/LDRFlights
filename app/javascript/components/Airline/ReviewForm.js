import React, { Fragment } from "react";
import styled from "styled-components";
import Gray from "./Stars/Gray";
import Selected from "./Stars/Selected";
import Hover from "./Stars/Hover";
import react from "react";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`;
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=utf-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=utf-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=utf-8,${Hover}");
  }
`;

const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 0 0 12px 0;
    padding: 12px;
    width: 97%;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`
const Wrapper = styled.div`
  background: #fff;
  padding: 20px;
  background: #000;
  height: 100vh;
  padding-top: 100px;
`
const SubmitBtn = styled.div`
  color: #fff;
  background: #66AD0C;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #66AD0C;
  width: 97%;
  margin-top: 20px;
  text-align: center;

  &:hover {
    border: 1px solid #fff;
  }
`
const Headline = styled.div`
  padding: 20px 0;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`
const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const ReviewForm = (props) => {
  console.log(props);

  const airline = props.airline.data.attributes;

  const [review, setReview] = React.useState({
    title: "",
    description: "",
    score: 0,
  });

  const onScoreChange = (score) => {
    setReview({ ...review, score: score });
    // debugger
  };
  9;
  const onTitleChange = (e) => {
    setReview({ ...review, title: e.target.value });
  };

  const onDescriptionChange = (e) => {
    setReview({ ...review, description: e.target.value });
  };

  const onSubmit = (e) => {
    props.onReviewSubmit(e, review);
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Headline>Have an experience with {airline.name}? Share your review!</Headline>
        <Field>
          <input
            onChange={onTitleChange}
            value={review.title}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </Field>
        <Field>
          <input
            onChange={onDescriptionChange}
            value={review.description}
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this Airline</RatingTitle>
            <RatingBox>
              {[1, 2, 3, 4, 5].map((score, index) => {
                console.log(score, review.score);
                return (
                  <Fragment key={index}>
                    <input
                      type="radio"
                      value={score}
                      checked={score <= review.score}
                      name="rating"
                      onChange={() => onScoreChange(score)}
                      id={`rating-${score}`}
                    />
                    <label onClick={() => onScoreChange(score)}></label>
                  </Fragment>
                );
              })}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn onClick={onSubmit}>
          Submit Your Review
        </SubmitBtn>
      </form>
    </Wrapper>
  );
};

export default ReviewForm;
