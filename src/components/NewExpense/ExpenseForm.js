import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [inputExpense, setInputExpense] = useState('');
    const [inputAmount,setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');
    const handleInputExpenseChange = (e) => {
        setInputExpense(e.target.value);
    }

    const handleInputAmountChange = (e) => {
        setInputAmount(e.target.value);

    }

    const handleInputDateChange = (e) => {
        setInputDate(e.target.value);

    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: inputExpense,
            amount: inputAmount,
            date: new Date(inputDate)
        };
        props.onSubmitExpense(expenseData);
        setInputExpense('');
        setInputAmount('');
        setInputDate('');
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={inputExpense} onChange={handleInputExpenseChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amout</label>
                    <input type="number" value={inputAmount} min="0.01" step="0.01" onChange={handleInputAmountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={inputDate} min="2019-01-01" max="2025-12-21" onChange={handleInputDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>

    );
}

export default ExpenseForm;