import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {

    const sign = transaction.transactionAmount > 0 ? '+' : '-'
    // delTransaction
    const { delTransaction } = useContext(GlobalContext)


    return (
        <li className={transaction.transactionAmount < 0 ? 'minus' : 'plus'}>
            { transaction.description }
            <span>{sign}${ Math.abs(transaction.transactionAmount) }</span>
            <button onClick={() => delTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    )
}
