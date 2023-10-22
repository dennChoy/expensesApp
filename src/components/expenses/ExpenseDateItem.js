import Card from 'react-bootstrap/Card';

function ExpenseDateItem(props){
    
    const month = props.expenseDateItem.toLocaleString('en-US', {month: 'long'});
    const day = props.expenseDateItem.toLocaleString('en-US', {day: '2-digit'});
    const year = props.expenseDateItem.getFullYear();

    return(
        <Card className="card text-center text-bg-secondary">
            <h5>{month}</h5>
            {year}
            <h3>{day}</h3>
        </Card>
    );
}

export default ExpenseDateItem;