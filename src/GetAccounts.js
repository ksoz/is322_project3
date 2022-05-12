import React from 'react';
import axios from 'axios';


const getDatabase = axios.create({
    baseURL: 'https://my-json-server.typicode.com/bnissen24/project2DB'
});
  
const getAllAccounts = async() => {
    const response = await getDatabase.get('/accounts');
  
    return response.data;
}

export default getAllAccounts;