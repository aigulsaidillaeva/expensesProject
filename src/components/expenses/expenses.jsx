import React from "react";
import style from "../../main.module.css";

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
    <div className={style.expenseItem}>
      <ExpenseItemDate date={props.date} />
      <div className={style.exTitle}>{props.title}</div>
      <div className={style.exPrice}>{props.price}$</div>
    </div>
  );
};

const ExpenseItemDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className={style.expenseDate}>
      <div className={style.month}>{month}</div>
      <div className={style.year}>{year}</div>
      <div className={style.day}>{day}</div>
    </div>
  );
};
