import React, { useState } from "react";
import "./App.css";
import { Expenses } from "./components/expenses/expenses";
import { ExpenseForm } from "./components/expnseForm/expenseForm";
import Button from "./components/UI/button";

const expensesData = [
  {
    id: "f1",
    title: "mackbook",
    date: new Date(),
    price: 10000,
  },
  {
    id: "f2",
    title: "iphone 15pro",
    date: new Date(),
    price: 20000,
  },
];

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openFunction() {
    setIsOpen(true);
  }

  function closeFunction() {}
  return (
    <div className="container">
      {isOpen ? (
        <ExpenseForm onClick={closeFunction} />
      ) : (
        <Button title="Записать расход" onClick={openFunction} />
      )}
      <Expenses expenses={expensesData} />
    </div>
  );
}

export default App;
