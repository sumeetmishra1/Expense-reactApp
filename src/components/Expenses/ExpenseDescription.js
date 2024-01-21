import React,{useState} from 'react';
function ExpenseDescription(props){
 let [expenseName,setTitle]= useState(props.expense.title)
    //const expenseName= props.expense.title
    const clickHandler=async()=>{
      setTitle('upd')
    }
    const location = props.expense.location
    const expenseAmount= props.expense.amount
    return(
        <div className="expense-item__description">
          <h2>{expenseName}</h2>
          <div className="expense-item__price">{expenseAmount}</div>
          <div>{location}</div>
          <button onClick={clickHandler}>change name</button>
        </div>
    )
}
export default ExpenseDescription