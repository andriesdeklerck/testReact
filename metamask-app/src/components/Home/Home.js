import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState('');

  useEffect(() => {
    loadMetaMaskData();
  }, []);

  const loadMetaMaskData = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Get the list of accounts
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccounts(accounts);

        // Get the account balance
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accounts[0], 'latest'],
        });
        setBalance(balance);

      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('MetaMask extension not detected!');
    }
  };

  return (
    <div className="container">
      <div className="card mt-4 p-4">
        <h1 className="mb-4">MetaMask Integration</h1>
        <p>Connected Account: {accounts.length > 0 ? accounts[0] : 'Not connected'}</p>
        <p>Account Balance: {balance}</p>
      </div>
    </div>
  );
};

export default Home;
