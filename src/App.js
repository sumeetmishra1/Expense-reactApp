import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location:'Gorakhpur'
  },
  { id: 'e2',
   title: 'New TV', 
   amount: 799.49, 
   date: new Date(2021, 2, 12),
   location:'Gorakhpur'
   },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location:'Gorakhpur'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    location:'Gorakhpur'
  },
];
function App() {
  const [newexpenses,setExpense]=useState(expenses);
  function expensehandler(expensedata){
    setExpense((prevExpense)=>{
      console.log(newexpenses)
      return [expensedata, ...prevExpense];
      
    })
  }
  
  return (
    <div>
      <NewExpense onSubmtting={expensehandler}/>
      {newexpenses.length===0 && <p>No Expenses Found</p>}
      <Expenses items={newexpenses} />
    </div>
  );
}

export default App;
