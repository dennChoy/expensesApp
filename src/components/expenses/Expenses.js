import ExpenseItem from "./ExpenseItem";
import Card from 'react-bootstrap/Card';

function Expenses(props){
    return<Card className="card text-bg-light mt-3 p-3">
            {props.expensesList.map(
            expense => <ExpenseItem 
                            key={expense.id}
                            expenseTitle={expense.title}
                            expenseAmount={expense.amount} 
                            expenseDate={expense.date}
                        />
            )}
          </Card>;
}

export default Expenses;