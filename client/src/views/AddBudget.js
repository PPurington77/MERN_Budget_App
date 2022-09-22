import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { createBudget } from '../services/internalApiService';

export const AddBudget = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState([]);

  const [errors, setErrors] = useState(null);

  const handleAddBudgetSubmit = (e) => {
    e.preventDefault();

    const newBudget = {
      name,
      amount,
      expense
    };

    createBudget(newBudget)
      .then((data) => {
        console.log('new Budget:', data);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow mb-5">
			<Link to={`/`}>home</Link>
			<h3>Add a new Budget:</h3>
      <form onSubmit={(e) => handleAddBudgetSubmit(e)}>
        <div className="form-group">
          <label className="h6">Name</label>
          {errors?.name && (
            <span> {errors?.name?.message}</span>
          )}
          <input onChange={(event) => {
              setName(event.target.value)}}
            type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label className="h6">Amount</label>
          {errors?.amount && (
            <span> {errors?.amount?.message}</span>
          )}
          <input onChange={(event) => {
              setAmount(event.target.value)}}
              type="number" step="0.01" className="form-control"/>
        </div>

        <div className="mt-4">
					<Link to={`/`} className="btn btn-sm btn-outline-success">Cancel</Link>
          <button className="btn btn-sm btn-outline-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBudget;