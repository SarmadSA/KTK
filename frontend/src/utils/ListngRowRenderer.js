import React from 'react';
import CardRenderer from './CardRenderer';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import * as consts from '../resources/consts';


const ListingRowRenderer = (props) => {
    const rowArray = [];
    const numberOfCardsToRender = props.number;
    const numberOfRows = Math.ceil(numberOfCardsToRender / consts.CARD_PER_ROW);
    const remainingCards = numberOfCardsToRender % consts.CARD_PER_ROW;


    const getRow = (numOfCards, from) => {
        return (
            <Row className="eachRow">
                <CardDeck>
                    <CardRenderer data={props.data} number={numOfCards} from={from}/>
                </CardDeck>
            </Row>
        );
    };

    const renderRows = (numOfRows) => {

        let lastRow = numOfRows;

        if (remainingCards !== 0) {
            lastRow = numOfRows - 1;
        }
        let renderFrom = 0;
        for (let rowNumber = 0; rowNumber < numOfRows; rowNumber++) {
            if (rowNumber === lastRow) {
                rowArray.push(getRow(remainingCards, renderFrom));
                renderFrom += remainingCards;
            } else {
                rowArray.push(getRow(consts.CARD_PER_ROW, renderFrom));
                renderFrom += consts.CARD_PER_ROW;
            }
        }
    };

    renderRows(numberOfRows);

    return rowArray;
};

export default ListingRowRenderer;