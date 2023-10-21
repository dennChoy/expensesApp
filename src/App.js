import Navbar from "./components/navbar/Navbar";
import Dashboard from './components/expenses/Dashboard';
import ExpenseItem from "./components/expenses/ExpenseItem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Dashboard />
        <ExpenseItem />
      </div>
    </div>
  );
}

export default App;
