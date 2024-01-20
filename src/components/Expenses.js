import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
function Expenses(props){
    const expenses=props.items;
    return(
        <Card className='expenses'>
        {
            expenses.map(expense=>{
                return <ExpenseItem expense={expense}></ExpenseItem>
              })
        }
        </Card>
    )
}
export default Expenses;