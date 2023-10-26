import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const NewExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: title,
        amount: amount,
        date: new Date(date)
    };
    props.addExpense(expenseData);
    clearInputs();
  };

  const clearInputs = () => {
    setTitle('');
    setAmount(0);
    setDate('');
  }

  return (
    <Card>
      <Form onSubmit={onSubmitHandler}>
        <Card.Body>
          <Form.Group>
            <Form.Label>New Expense</Form.Label>
            <Form.Control type="text" value={title} onChange={titleHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" value={amount} onChange={amountHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" value={date} onChange={dateHandler} />
          </Form.Group>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button type="submit">Add Expense</Button>
        </Card.Footer>
      </Form>
    </Card>
  );
};

export default NewExpenseForm;
