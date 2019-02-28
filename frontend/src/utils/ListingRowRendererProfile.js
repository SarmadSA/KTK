import React from 'react';
import PCardRenderer from './ProfileCardRenderer';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import * as consts from '../resources/consts';


const ListingRowRendererProfile = (props) => {
    const rowArray = [];
    const numberOfCardsToRender = props.number;
    const numberOfRows = Math.ceil(numberOfCardsToRender/consts.CARD_PER_P_ROW);
    const remainingCards = numberOfCardsToRender % consts.CARD_PER_P_ROW;


    const getRow = (numOfCards) => {
        return (
            <Row className="eachRow">
                <CardDeck>
                    <PCardRenderer number={numOfCards}/>
                </CardDeck>
            </Row>
        );
    };

    const renderRows = (numOfRows) =>{
        for(let rowNumber = 0; rowNumber < numOfRows; rowNumber++){
            const lastRow = numOfRows;
            
            if (remainingCards !== 0) {
                lastRow = numOfRows - 1;
            }
            if(rowNumber === lastRow){
                rowArray.push(getRow(remainingCards));
            } else{
                rowArray.push(getRow(consts.CARD_PER_P_ROW));
            }
        }
    };

    renderRows(numberOfRows);

    return rowArray;
};

export default ListingRowRendererProfile;