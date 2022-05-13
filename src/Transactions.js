import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import Transaction from './Transaction';
import './transactions.css';

const Transactions = (transactions, props) => {
    return (
        <div className="account-transactions">
            <h3>Transactions</h3>
            <div>
            {transactions.map((trans) => (
                <div>
                    <Transaction key={trans._id} accountId={trans.accountId} note={trans.name} amount={trans.amount}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Transactions;