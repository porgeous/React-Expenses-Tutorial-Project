import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: 'e1', title: "Protein powder", amount: 82.27, date: new Date(2022, 7, 16) },
  { id: 'e2', title: "Car insurance", amount: 294.67, date: new Date(2022, 10, 28) },
  { id: 'e3', title: "Books", amount: 114.53, date: new Date(2022, 9, 12) },
  { id: 'e4', title: "Gym membership", amount: 49.99, date: new Date(2022, 8, 14) },
];




const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
