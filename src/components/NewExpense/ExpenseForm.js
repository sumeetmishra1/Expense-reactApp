import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const[enteredtitle,changetitle]=useState('')
  const[enteredamount,changeamount]=useState('')
  const[entereddate,changedate]=useState('')
  function titletChangeHandler(e){
    changetitle(e.target.value)
  }
  function amountChangedHandler(e){
    changeamount(e.target.value)
  }
  function dateChangedHandler(e){
    changedate(e.target.value)
  }
  function formsubmitted(e){
    e.preventDefault();
    const obj={
      title:enteredtitle,
      amount:+enteredamount,
      date:new Date(entereddate)
    }
    props.onSubmitForm(obj);
   changeamount('');
   changedate('');
   changetitle('');
  }
  return (
    <form onSubmit={formsubmitted}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'value={enteredtitle} onChange={titletChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredamount} onChange={amountChangedHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={entereddate} onChange={dateChangedHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;