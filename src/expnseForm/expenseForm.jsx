import React from "react";

export const ExpenseForm = (props) => {
  return (
    <form action="">
      <div>
        <label htmlFor="">{props.title}</label>
        <input type="text" placeholder="" />
      </div>
    </form>
  );
};
