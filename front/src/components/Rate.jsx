import React from 'react';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
)

const Rate = ({ question }) => {
    const promedio = Math.round(question.sumOfReviewScores / question.numberOfReviews
    );

    switch (promedio) {
        case 1:
            return <h1> <Emoji symbol="😭" /> </h1>;
        case 2:
            return <h1>  <Emoji symbol="😲" /> </h1>;
        case 3:
            return <h1>  <Emoji symbol="😍" /> </h1>;
        default:
            return <h1> </h1>;
    }
}

export default Rate;