import "../ExpenseDate/ExpenseDate.components";
import "../Expense/Expense.styles.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter.components";
import ExpenseList from "../ExpenseList/ExpenseList.components";
import { useState } from "react";

function Expense(props) {
  const [filteredYear, setFileteredYear] = useState("2020");
  const expenseFilterYear = (selectedYear) => {
    setFileteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={expenseFilterYear}
        />
        <ExpenseList items={filteredExpense}/>
      </div>
    </div>
  );
}

export default Expense;
