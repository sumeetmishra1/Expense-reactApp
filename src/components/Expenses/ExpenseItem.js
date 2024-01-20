import './ExpenseItem.css'
import ExpenseDescription from './ExpenseDescription'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
function  ExpenseItem(props){
    const expenseDate =props.expense.date
   
    return (
      <Card className="expense-item">
        <ExpenseDate date={expenseDate}/>
        <ExpenseDescription expense={props.expense}/>
      </Card>
     
    );
}
export default ExpenseItem