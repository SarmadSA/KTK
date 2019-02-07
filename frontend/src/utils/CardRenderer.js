import React from 'react';
import ListingCard from '../components/ListingCard';


const CardRenderer = (props) => {
    const cardArray = [];

    renderCards(props.number);

    function renderCards(numOfCards) {
        for(let i = 0; i < numOfCards; i++){
            cardArray.push(<ListingCard/>);
        }
    }

    return cardArray;
};

export default CardRenderer;
