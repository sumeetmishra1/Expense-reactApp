import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      {
        expenses.map(expense=>{
          return <ExpenseItem expense={expense}></ExpenseItem>
        })
      }
      {
        
      }
    </div>
  );
}

export default App;
