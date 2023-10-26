import Navbar from "./components/navbar/Navbar";
import Dashboard from './components/Dashboard/Dashboard';
import Expenses from "./components/expenses/Expenses";
import NewExpenseForm from "./components/modal/NewExpenseForm";

function App() {

  const expensesList = [
    { id: 'e1', title: 'Car Service', amount: 100, date: new Date(2023, 10, 3) },
    { id: 'e2', title: 'Amazon Prime', amount: 10, date: new Date(2023, 9, 3) },
    { id: 'e3', title: 'Netflix', amount: 80, date: new Date(2023, 8, 3) },
    { id: 'e4', title: 'Spotify', amount: 54, date: new Date(2023, 7, 3) },
  ];

  const addExpenseHandler = expense => {
    console.log('from app.js');
    const newExpense={
      id:Math.random().toString(),
      ...expense
    }
    expensesList.push(newExpense)
    console.log(expensesList);
  }

  const changeFilterHandler = year => {
    console.log(year);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Dashboard changeYear={changeFilterHandler} />
        <NewExpenseForm addExpense={addExpenseHandler} />
        <Expenses expensesList={expensesList}/>
      </div>
    </div>
  );
}

export default App;
