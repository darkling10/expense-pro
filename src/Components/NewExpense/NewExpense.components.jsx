import React from 'react'
import './NewExpense.styles.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const onSaveHandler =(enteredExpensedData)=>{
        const expenseData ={
            ...enteredExpensedData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        console.log(expenseData)
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveHandler}/>
    </div>
};

export default NewExpense;