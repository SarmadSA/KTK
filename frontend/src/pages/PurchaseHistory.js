import React from 'react';
import PurchasedItem from '../components/PurchasedItem';
import '../css/PurchaseHistory.css';

const  PurchaseHistory = () =>{
    return (<div className="historyDiv">
                <PurchasedItem/>
                <PurchasedItem/>
                <PurchasedItem/>
            </div>);
};

export default PurchaseHistory;