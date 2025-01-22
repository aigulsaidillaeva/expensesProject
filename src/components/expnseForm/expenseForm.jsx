import React from "react";
import Button from "../UI/button";
import style from "../../main.module.css";
export const ExpenseForm = (props) => {
  return (
    <form action="" className={style.form}>
      <div className={style.fields}>
        <ExpenseFields
          id="f1"
          label="Заголовок"
          placeholder="Напишите название расхода"
        />
        <ExpenseFields
          id="f2"
          type="number"
          label="Количество"
          placeholder="Введите сколько вы потратили"
        />
        <ExpenseFields
          id="f3"
          type="date"
          label="Датировать"
          placeholder="дд.мм.гггг"
        />
      </div>

      <div className={style.formButtons}>
        <Button title="Отмена" onClick={props.close} />
        <Button title="Добавить расходы" />
      </div>
    </form>
  );
};

const ExpenseFields = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type || "text"} placeholder={props.placeholder} />
    </div>
  );
};
