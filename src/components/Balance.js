import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.transactionAmount)
    const total = amounts.reduce((total, amount) => (total += amount), 0).toFixed(2);

    return (
        <div className="balance-div">
            <h4>Current Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}
