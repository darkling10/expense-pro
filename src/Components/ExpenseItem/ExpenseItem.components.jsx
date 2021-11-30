import React,{ useState } from 'react'
import '../ExpenseItem/ExpenseItem.styles.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate.components';

function ExpenseItem(props) {

    const [title,setTitle]=useState(props.data.title)
    const clickHandler = () =>{
        setTitle('Updated')
        console.log({title})
    }
    return (
        <div className="expense-item">
            
            <ExpenseDate date={props.data.date}/>
            <div className="expense-item__description">
            <h2>{title}</h2>
            </div>
            <div className="expense-item__price">
            <p>{props.data.amount}</p>
            <button onClick={clickHandler}>Click</button>
            </div>
        </div>
    )
}

export default ExpenseItem;