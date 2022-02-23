import React from "react";
import styled from "styled-components";
import Rating from "../Rating/Rating";
import axios from "axios";
import { BrowserRouter as Router, Link } from 'react-router-dom'


const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px 20px 0;
  position: relative;
`;
const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 18px;
`;
const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`;
const DelBtn = styled.div`
  color: #fff;
  background: #e74c3c;
  border-radius: 4px;
  padding: 6px 10px 6px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #e74c3c;
  text-align: center;
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    border: 1px solid #fff;
  }
`;

// const LinkWrapper = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 20px;

//   a {
//     color: #fff;
//     background: #e74c3c;
//     border-radius: 4px;
//     padding: 6px 10px 6px 10px;
//     border: 1px solid #e74c3c;
//     text-decoration: none;
//     transition: ease-in-out 0.1s;
//     text-align: center;
//     cursor: pointer;
//   }

//   a:hover {
//     border: 1px solid #fff;
//   }
// `;

const delReview = (e) => {
  const id = e.target.attributes.data.nodeValue;
  axios.delete(`/api/v1/reviews/${id}`);
};

const Review = (props) => {
  const { score, title, description } = props.attributes;
  return (
    <Card>
      <RatingContainer>
        <Rating score={score} />
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DelBtn onClick={delReview} data={props.id}>
        &#215;
      </DelBtn>
      {/* <LinkWrapper>
        <Link to={`/reviews/${props.id}`}>&#215;</Link>
        <Link to={`/reviews/${props.id}`} data-confirm='Are you sure?' data-method='delete'>&#215;</Link>
      </LinkWrapper> */}
    </Card>
  );
};

export default Review;
