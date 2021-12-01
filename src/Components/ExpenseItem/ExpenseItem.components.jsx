import React, { useState } from 'react'
import '../ExpenseItem/ExpenseItem.styles.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate.components';

function ExpenseItem(props) {

    return (
        <div className="expense-item">

            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">
                <p>{props.amount}</p>

            </div>
        </div>
    )
}

export default ExpenseItem;