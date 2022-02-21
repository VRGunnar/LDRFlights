import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components'

const Wrapper = styled.div`
 padding: 50px 100px 50px 0;
 font-size: 30px;

 img {
     height: 60px;
     width: 60px;
     border-radius: 100%;
     border: 1px solid rgba(0, 0, 0, 0.1);
     margin-bottom: -8px;
     margin-right: 2px;
 }
`
const TotalReviews = styled.div`
 font-size: 18px;
 padding: 10px 0;
`
const TotalOutOf = styled.div`
 font-size: 18px;
 font-weight: bold;
 padding: 10px 0;
`

const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes[0];
    // console.log(props)
    const total = props.attributes[1].length;

    return (
        <Wrapper>
            <h1> <img src={image_url} alt={name}/>{name}</h1>
            <div>
                <TotalReviews>{total} User Reviews</TotalReviews>
                <div className="starRating"></div>
                <TotalOutOf>{avg_score} out of 5</TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header