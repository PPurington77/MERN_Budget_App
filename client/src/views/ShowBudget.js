import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import {
  deleteOneById,
  getBudgetById,
  getAll,
  getOneById,
  create,
} from "../services/internalApiService";

export const ShowBudget = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [budget, setBudget] = useState(null);
  // const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState(null);
  const [cost, setCost] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getBudgetById(id)
    	.then((data) => {
        	console.log(data);
        	setBudget(data);
    })
    .catch((error) => {
        console.log(error);
    });
	}, [id]);

	if(budget === null) return null;

	const { amount } = budget;

  const handleAddExpenseSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      name,
      category,
      cost,
    };
	
    create(id, newExpense)
      .then((data) => {
        console.log(data);
        console.log("new expense:", data);
        navigate(`/budgets/${id}/create`);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });

    setName("");
    setCategory(null);
    setCost("");
  };

    const handleDelete = (idToDelete) => {
      deleteOneById(idToDelete)
        .then((deletedExpense) => {
          const filteredExpenses = budget.expense.filter((expense) => {
            return expense._id !== idToDelete;
          });

          console.log('Deleted expense:', deletedExpense);
        //   setExpenses(filteredExpenses);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div className="container p-3 w-60 mx-auto text-center">
      <div className="d-flex justify-content-center">
        <h1>Hello, {budget.name}</h1>
        <div className="card bg-light mb-3 ml-3">
          <div className="card-body">
            <h5 className="card-title">Budget:{ amount }</h5>
          </div>
        </div>
        <div className="card bg-light mb-3 ml-3">
          <div className="card-body">
            <h5 className="card-title">Spent:</h5>
          </div>
        </div>
        <div className="card bg-light mb-3 ml-3">
          <div className="card-body">
            <h5 className="card-title">Remaining:</h5>
          </div>
        </div>
      </div>
      <Link to={"/"} className="btn btn-sm btn-outline-success mb-3">
        Back to all Budget
      </Link>
      <div>
				<h3>{ budget.name } Expenses</h3>
				{budget.expense.map((expense) => {
					return (
						<div key={budget.expense.id}>
							<p>{ expense }</p>
						</div>
					)
				})}
			</div>
      <hr />

      <div>
        <form onSubmit={(e) => handleAddExpenseSubmit(e)}>
          <div className="form-group">
            <label className="h6">Expense Name:</label>
            {errors?.name && <span> {errors?.name?.message}</span>}
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="h6">Category:</label>
            <select
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value="null">Please select one</option>
              <option value="food">Food</option>
              <option value="housing">Housing</option>
              <option value="transportation">Transportation</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="h6">Cost:</label>
            {errors?.cost && <span> {errors?.cost?.message}</span>}
            <input
              onChange={(event) => {
                setCost(event.target.value);
              }}
              type="text"
            />
          </div>
          <div className="mt-4">
            <button className="btn btn-sm btn-outline-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowBudget;
