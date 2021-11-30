import "../ExpenseDate/ExpenseDate.components"
import "../Expense/Expense.styles.css"
import ExpenseItem from "../ExpenseItem/ExpenseItem.components"

function Expense(props) {
  return(<div className="expenses">
    <ExpenseItem data={props.data[0]}/>
    <ExpenseItem data={props.data[1]}/>
    <ExpenseItem data={props.data[2]}/>
    <ExpenseItem data={props.data[3]}/>
  </div>)
}

export default Expense;