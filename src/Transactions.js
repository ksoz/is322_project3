import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import Account from './Account.js';
import './transactions.css';

const Transactions = ({transactions}, props) => {
    return (
        <div className="account-transactions">
            <h3>Transactions</h3>
            <div>
            {transactions.map((trans) => (
                <div>
                    {transactions._id}, {transactions.accountId}, {transactions.type}, {transactions.amount}, {transactions.name}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Transactions;