import React from 'react';
import "./accounts.css";
import Transactions from './Transactions';


const Account = (props) => {
    return  (
        <div className="account_container">
            <div className="account_header">
                <h3>{props.name}</h3>
            </div>
            <div className="account_content">
                <h4>${props.balance}</h4>
            </div>

        </div>
    )
}

export default Account;