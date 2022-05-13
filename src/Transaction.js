import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import Account from './Account.js';
import './transactions.css';

const Transaction = (props) => {
    return  (
        <div className="transaction_container">
            <div className="transaction_header">
                <h3>{props._id}, Account: {props.accountId}</h3>
            </div>
            <div className="transaction_content">
                <h4>Type: {props.type}</h4>
                <h4>Amount: {props.amount}</h4>
                <h4>Note: {props.name}</h4>
            </div>
        </div>
    )
}

export default Transaction;