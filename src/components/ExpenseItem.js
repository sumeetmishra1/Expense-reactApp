import './ExpenseItem.css'
function  ExpenseItem(){
    const expenseDate =new Date().toISOString();
    const expenseName= 'Car fees'
    const location ='Gorakhpur'
    const expenseAmount=1000
    return (
      <div className="expense-item">
        <div>{expenseDate}</div>
        <div className="expense-item__description">
          <h2>{expenseName}</h2>
          <div className="expense-item__price">{expenseAmount}</div>
          <div>{location}</div>
        </div>
      </div>
    );
}
export default ExpenseItem