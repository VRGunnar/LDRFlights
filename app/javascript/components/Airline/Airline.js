import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./Header";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

const Airline = () => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  let params = useParams();
  // console.log(params);

  useEffect(() => {
    const slug = params.slug;
    const url = `/api/v1/airlines/${slug}`;
    // api/v1/airlines/united-airlines
    // airlines/united-airlines

    axios
      .get(url)
      .then((resp) => {
        setAirline(resp.data);
        setReview(resp.included);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  const onReviewSubmit = (e, review) => {
    e.preventDefault();

    const crsfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = crsfToken;
    const airline_id = airline.data.id;
    axios
      .post("/api/v1/reviews", {
        review: { ...review, airline_id: airline_id },
      })
      .then((resp) => {
        const included = [...airline.included, resp.data];
        setAirline({ ...airline, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((resp) => {});
  };

  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              <Header
                attributes={[airline.data.attributes, airline.included]}
              />
              <div className="reviews"></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm onReviewSubmit={onReviewSubmit} airline={airline} />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Airline;
