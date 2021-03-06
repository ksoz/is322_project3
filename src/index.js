import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Accounts from './Accounts';
import Account from './Account';
import Transactions from './Transactions';
import Transaction from './Transaction';
import Nav from './Nav';
import { render } from '@testing-library/react';



//Main component of the App
const App = () => {
  const [accounts, setAccounts] = useState([
    { "_id": 1, "name": "Lannisters", "balance": 1189.78 },
    { "_id": 2, "name": "Starks", "balance": 567.71 },
    { "_id": 3, "name": "Baratheons", "balance": 31.26 },
    { "_id": 4, "name": "Targaryens", "balance": 34.75 },
    { "_id": 5, "name": "Greyjoys", "balance": 9.03 },
    { "_id": 6, "name": "Tyrells", "balance": 1133.45 },
    { "_id": 7, "name": "Martells", "balance": 737.90 },
    { "_id": 8, "name": "Tullys", "balance": 483.56 },
    { "_id": 9, "name": "Arryns", "balance": 1035.83 },
    { "_id": 10, "name": "Free Folk", "balance": -134.34 }
  ])
  const [transactions, setTransactions] = useState([
    { "_id": 1, "accountId": 1, "type": "deposit", "amount": 677.40, "name": "Account Opened" },
    { "_id": 2, "accountId": 1, "type": "deposit", "amount": 1000.00, "name": "Gold Mine Profits" },
    { "_id": 3, "accountId": 1, "type": "withdraw", "amount": 300.00, "name": "Iron Bank Interest" },
    { "_id": 4, "accountId": 1, "type": "withdraw", "amount": 402.34, "name": "Defenses of Kings Landing" },
    { "_id": 5, "accountId": 1, "type": "deposit", "amount": 214.72, "name": "Taxes from Kingdoms" },
    { "_id": 6, "accountId": 2, "type": "deposit", "amount": 500.00, "name": "Account Opened" },
    { "_id": 7, "accountId": 2, "type": "deposit", "amount": 120.34, "name": "Taxes from bannermen" },
    { "_id": 8, "accountId": 2, "type": "withdraw", "amount": 204.23, "name": "Sending Lord to Capital" },
    { "_id": 9, "accountId": 2, "type": "withdraw", "amount": 11.34, "name": "Camping at Twins" },
    { "_id": 10, "accountId": 2, "type": "deposit", "amount": 162.94, "name": "Spoils of War" },
    { "_id": 11, "accountId": 3, "type": "deposit", "amount": 934.36, "name": "Account Opened" },
    { "_id": 12, "accountId": 3, "type": "withdraw", "amount": 394.95, "name": "Younger Brother Rebelled" },
    { "_id": 13, "accountId": 3, "type": "withdraw", "amount": 183.48, "name": "Attacked King's Landing" },
    { "_id": 14, "accountId": 3, "type": "deposit", "amount": 500.00, "name": "Iron Bank Loan" },
    { "_id": 15, "accountId": 3, "type": "withdraw", "amount": 643.03, "name": "Hire Mercenaries" },
    { "_id": 24, "accountId": 3, "type": "withdraw", "amount": 138.64, "name": "Transit to Wall" },
    { "_id": 16, "accountId": 4, "type": "deposit", "amount": 34.75, "name": "Account Opened" },
    { "_id": 17, "accountId": 5, "type": "deposit", "amount": 9.03, "name": "Account Opened" },
    { "_id": 18, "accountId": 6, "type": "deposit", "amount": 1133.45, "name": "Account Opened" },
    { "_id": 19, "accountId": 7, "type": "deposit", "amount": 737.9, "name": "Account Opened" },
    { "_id": 20, "accountId": 8, "type": "deposit", "amount": 483.56, "name": "Account Opened" },
    { "_id": 21, "accountId": 9, "type": "deposit", "amount": 1035.83, "name": "Account Opened" },
    { "_id": 22, "accountId": 10, "type": "deposit", "amount": 0.00, "name": "Account Opened" },
    { "_id": 23, "accountId": 10, "type": "withdraw", "amount": 134.34, "name": "Raiding Repayment" }
  ])
  const [show, setShow] = useState(false);

  const deleteAccount = (_id) => {
    setAccounts(accounts.filter((account)=>account._id !== _id))
  }
  const showTransactions = (_id) => {
    setAccounts(accounts.filter((account)=>account._id == transactions.accountId))
  }
  const TransactionsModal = () => {
    return (
      <div className="modal" show={show}>
        <div className="modal-content">
          {transactions.map((trans) => (
            <div>
              <Transaction key={trans._id} accountId={trans.accountId} note={trans.name} amount={trans.amount}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <Router>
    <div class="App">
      <h2>***NOTE: This does not use the API. I attempted to connect to your provided project2DB but was having difficulties. </h2>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/accounts" exact element={<Accounts accounts={accounts} setShow={show} showTrans={showTransactions} onDelete={deleteAccount}/>}/>
          <Route path="/account" exact element={<Account/>}/>
          <Route path="/transactions" exact element={<Transactions transactions={transactions}/>}/>

        </Routes>
        
    </div>
    </Router>
  );
}


ReactDOM.render(
  <App/>,
  document.querySelector('#root'),
)

export default App;