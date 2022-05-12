import React, {PropTypes} from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import "./accounts.css";
import Account from './Account.js';
import getAllAccounts from './GetAccounts';

const accountList = []

const Accounts = ({accounts, onDelete}) => {
    const navStyle = {
        color: 'black'
    };
    if (accounts)
    return (
        <div className="accounts">
            <h1>Accounts</h1>
            <div className="account_buttons">
            </div>
            <div className="account_list">
                <div>
                    {accounts.map((account) => (
                    <div>
                    <button onClick={() => onDelete(account._id)}>Delete Account</button>
                    <Link to="/account">
                        <Account key={account._id} name={account.name} balance={account.balance}/>
                    </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
    if (!accountList) {
        return <h2>There was a problem with the API call.</h2>
    }
    return <div> Loading....</div>;
}


export default Accounts;