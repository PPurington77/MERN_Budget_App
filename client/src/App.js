// import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AllExpenses from './views/AllExpense';
import Home from './views/Home';

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/expenses" element={<AllExpenses />} />
        <Route path="/expense" element={<Navigate to="/expenses" replace />} />
      </Routes>
    </div>
  );
}

export default App;
