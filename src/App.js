import Navbar from "./components/navbar/Navbar";
import Dashboard from './components/expenses/Dashboard';
import Expenses from "./components/expenses/Expenses";

function App() {

  const expensesList = [
    { id: 'e1', title: 'Car Service', amount: 100, date: new Date(2023, 10, 3) },
    { id: 'e2', title: 'Amazon Prime', amount: 10, date: new Date(2023, 9, 3) },
    { id: 'e3', title: 'Netflix', amount: 80, date: new Date(2023, 8, 3) },
    { id: 'e4', title: 'Spotify', amount: 54, date: new Date(2023, 7, 3) },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Dashboard />
        <Expenses expensesList={expensesList}/>
      </div>
    </div>
  );
}

export default App;
