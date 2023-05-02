import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const onSubmitExpense = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)

    }
    return(
        <div className="new-expense">
            <div>
                <ExpenseForm onSubmitExpense={onSubmitExpense}/>
            </div>
        </div>
    );
}

export default NewExpense;