import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const expensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          title={expense.title}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default expensesList;
