import "../ExpenseDate/ExpenseDate.components"
import "../Expense/Expense.styles.css"
import ExpenseItem from "../ExpenseItem/ExpenseItem.components"
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter.components"

function Expense(props) {
  const expenseFilterYear = (yearFound) => {
    console.log("Succesfully got :"+yearFound)
  }
  return (
    <div>
      <ExpensesFilter onYearChange={expenseFilterYear} />
      <div className="expenses">
        <ExpenseItem data={props.data[0]} />
        <ExpenseItem data={props.data[1]} />
        <ExpenseItem data={props.data[2]} />
        <ExpenseItem data={props.data[3]} />
      </div>
    </div>)
}

export default Expense;