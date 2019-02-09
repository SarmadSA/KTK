import React from 'react';
import CardRenderer from './CardRenderer';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import * as consts from '../resources/consts';


const ListingRowRenderer = (props) => {
    const rowArray = [];
    const numberOfCards = props.number;
    const numberOfRows = Math.ceil(numberOfCards/consts.CARD_PER_ROW);
    const lastElement = numberOfCards % consts.CARD_PER_ROW;


    const getRow = (numOfCards) => {
        return (
            <Row className="eachRow">
                <CardDeck>
                    <CardRenderer number={numOfCards}/>
                </CardDeck>
            </Row>
        );
    };

    const renderRows = (numOfRows) =>{
        for(let rowNumber = 0; rowNumber < numOfRows; rowNumber++){
            const lastRow= numOfRows - 1;
            if(rowNumber === lastRow){
                rowArray.push(getRow(lastElement));
            } else{
                rowArray.push(getRow(consts.CARD_PER_ROW));
            }
        }
    };

    renderRows(numberOfRows);

    return rowArray;
};

export default ListingRowRenderer;