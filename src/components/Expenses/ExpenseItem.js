import './ExpenseItem.css'
import ExpenseDescription from './ExpenseDescription'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
function  ExpenseItem(props){
    const expenseDate =props.expense.date
   function deleteExpense(e){
    e.target.parentElement.remove()
    console.log()
   }
    return (
      <Card className="expense-item">
        <ExpenseDate date={expenseDate}/>
        <ExpenseDescription expense={props.expense}/>
        <button onClick={deleteExpense}>Delete</button>
      </Card>
     
    );
}
export default ExpenseItem