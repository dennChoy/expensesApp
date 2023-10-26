import ExpenseDateItem from "./ExpenseDateItem";
import Card from 'react-bootstrap/Card';

function ExpenseItem(props){


    return(
        <Card className="card mt-3 p-3">
            <div className="row">
                <div className="col"> 
                    <ExpenseDateItem expenseDateItem={props.expenseDate}/>
                </div>
                <div className="col-6 p-3"><h2>{props.expenseTitle} </h2></div>
                <div className="col text-end">
                    <h1><span className="badge rounded-pill text-bg-info m-4">${props.expenseAmount}</span></h1>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;