
function ExpenseDescription(props){
 
    const expenseName= props.expense.title
  
    const expenseAmount= props.expense.amount
    return(
        <div className="expense-item__description">
          <h2>{expenseName}</h2>
          <div className="expense-item__price">{expenseAmount}</div>
          
        </div>
    )
}
export default ExpenseDescription