// import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AddBudget from './views/AddBudget';
import ShowBudget from './views/ShowBudget';
import Home from './views/Home';

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/budgets/:id" element={<ShowBudget />} />
        <Route path="/budgets/new" element={<AddBudget />} />
      </Routes>
    </div>
  );
}

export default App;
