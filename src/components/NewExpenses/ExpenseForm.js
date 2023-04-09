import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  function submitHandler(event) {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
  
    props.onSaveExpenseData(expenseDate);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <lable>Amount</lable>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseFrom;
