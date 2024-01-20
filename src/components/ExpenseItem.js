import './ExpenseItem.css'
import ExpenseDescription from './ExpenseDescription'
import ExpenseDate from './ExpenseDate'
function  ExpenseItem(props){
    const expenseDate =props.expense.date
   
    return (
      <div className="expense-item">
        <ExpenseDate date={expenseDate}/>
        <ExpenseDescription expense={props.expense}/>
      </div>
    );
}
export default ExpenseItem