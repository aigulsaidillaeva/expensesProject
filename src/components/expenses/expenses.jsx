import React from "react";

export const Expenses = (props) => {
  return (
    <ul className="expenseWrapper">
      {props.expenses.map((item) => {
        return <ExpenseItem {...item} key={item.id} />;
      })}
    </ul>
  );
};

const ExpenseItem = (props) => {
  return (
    <div>
      <ExpenseItemDate date={props.date} />
      <div>{props.title}</div>
      <div>{props.price}$</div>
    </div>
  );
};

const ExpenseItemDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};
