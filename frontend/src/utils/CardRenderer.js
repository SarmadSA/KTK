import React from 'react';
import ListingCard from '../components/ListingCard';


const CardRenderer = (props) => {
    const cardArray = [];

    renderCards(props.number, props.data, props.from);

    function renderCards(numOfCards, data, from) {
        for (let i = from; i < numOfCards + from; i++) {
            cardArray.push(
                <ListingCard
                    title={data[i].title}
                    description={data[i].description}
                    image={data[i].image}
                    age={data[i].age}
                    country={data[i].country}
                />
            );
        }
    }

    return cardArray;
};

export default CardRenderer;