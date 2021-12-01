import "../ExpenseDate/ExpenseDate.components"
import "../Expense/Expense.styles.css"
import ExpenseItem from "../ExpenseItem/ExpenseItem.components"
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter.components"
import { useState } from "react"

function Expense(props) {
  const [filteredYear, setFileteredYear] = useState("2020")
  const expenseFilterYear = (selectedYear) => {
    setFileteredYear(selectedYear)
  }
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter selected={filteredYear} onYearChange={expenseFilterYear} />

        {props.items.map((expense) => {
          return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        })}
      </div>
    </div>)
}

export default Expense;