import React, { useState } from "react";
import "./NewExpense.styles.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [initialClick, setinitialClick] = useState(true);
  const onSaveHandler = (enteredExpensedData) => {
    const expenseData = {
      ...enteredExpensedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setinitialClick(true)
    console.log(expenseData);
  };


  const startEditing = () => {
      setinitialClick(false);
  }
  const stopEditing =()=>{
      setinitialClick(true);
    }
  
 
  return (
    <div className="new-expense">
      {initialClick && <button onClick={startEditing}>Add New Expense</button>}
      {!initialClick && <ExpenseForm onSaveExpenseData={onSaveHandler} stopEditing={stopEditing}/>}
    </div>
  );
};

export default NewExpense;
