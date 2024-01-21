import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const formsubmitted=(expense)=>{
        const expensedata={
            ...expense,
            id:Math.random().toString
        }
        props.onSubmtting(expensedata);
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSubmitForm={formsubmitted}/>
    </div>
  );
};

export default NewExpense;