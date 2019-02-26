import React from 'react';
import Profilecard from '../components/ProfileListingCard';


const ProfileCardRenderer = (props) => {
    const cardArray = [];

    renderCards(props.number);

    function renderCards(numOfCards) {
        for(let i = 0; i < numOfCards; i++){
            cardArray.push(<Profilecard/>);
        }
    }

    return cardArray;
};

export default ProfileCardRenderer;
