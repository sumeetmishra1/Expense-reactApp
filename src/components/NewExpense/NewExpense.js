import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const formsubmitted=(expense)=>{
        const expensedata={
            ...expense,
            id:Math.random().toString()
        }
        props.onSubmtting(expensedata);
    }
    let expenseform=<p><button onClick={showexpenseform}>Add Expense</button></p>
    const[form,showform]=useState(expenseform)
   function showexpenseform(){
     expenseform=<ExpenseForm onSubmitForm={formsubmitted} onCancel={hidepenseform}/>
     showform(expenseform);
   }
   function hidepenseform(){
    expenseform=<p><button onClick={showexpenseform}>Add Expense</button></p>
    showform(expenseform);
   }

  return (
    <div className='new-expense'>
      {form}
    </div>
  );
};

export default NewExpense;