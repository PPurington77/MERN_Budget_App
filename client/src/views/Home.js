import { Link } from 'react-router-dom';

export const Home = (props) =>{

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
				<h1 className="navbar-brand mb-0">Welcome</h1>
			</nav>

			<div className="row">
				<div className="col-sm-6 mx-auto">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Current Budgets</h5>
							<p className="card-text">...</p>
							<p className="card-text">...</p>
							<p className="card-text">...</p>
							<Link to={"/expenses"}> test</Link>
							<Link to={"/budget/new"} className="btn btn-sm btn-outline-success">Create a new budget</Link>
      			</div>
    			</div>
  			</div>
			</div>
		</div>
)};


export default Home;