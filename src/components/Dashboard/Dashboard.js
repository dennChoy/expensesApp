import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ExpensesFilter from "./ExpensesFilter";

function Dashboard(props) {

  const onChangeHandler = event => {
    props.changeYear(event.target.value);
  }
  return (
    <Card className="mt-3">
      <Card.Header>Expenses</Card.Header>
      <Card.Body>
        <Form.Select onChange={onChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </Form.Select>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;
