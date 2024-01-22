import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
function Expenses(props){
    return(
        <Card className='expenses'>
            
        {
            props.items.map(expense=>{
                return <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
              })
        }
        </Card>
    )
}
export default Expenses;