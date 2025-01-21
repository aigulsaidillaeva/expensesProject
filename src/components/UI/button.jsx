import React from "react";
import style from "./button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className={style.button} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
