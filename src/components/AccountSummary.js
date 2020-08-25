import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';



export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(amount => amount.transactionAmount)
    
    // extracting positive values and adding them up
    const positiveAmounts = amounts.filter((amount) => (amount>0))
    const posSum = positiveAmounts.reduce( (total, item) => (total+=item), 0)

    // extracting negative values and adding them up
    const negativeAmounts = amounts.filter((amount) => (amount<0))
    const negSum = negativeAmounts.reduce( (total, item) => (total+=item), 0)
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${ posSum.toFixed(2) }
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    ${ Math.abs(negSum).toFixed(2) }
                </p>
            </div>
        </div>
    )
}