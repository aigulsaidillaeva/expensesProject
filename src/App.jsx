import React from "react";
import "./App.css";
import { Expenses } from "./components/expenses/expenses";
import { ExpenseForm } from "./expnseForm/expenseForm";

const expensesData = [
  {
    id: "f1",
    title: "mackbook",
    date: new Date(),
    price: 10000,
  },
  {
    id: "f2",
    title: "iphone 16 promax ",
    date: new Date(),
    price: 20000,
  },
];

export function App() {
  return (
    <div className="container">
      <ExpenseForm />
      <Expenses expenses={expensesData} />
    </div>
  );
}

export default App;
