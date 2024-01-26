import React, { useState } from "react";

const Form = ({ addExpression }) => {
	const [expression, setExpression] = useState({
		ruleType: "Age",
		value: "",
		operator: ">=",
		score: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setExpression((prevExpression) => ({
			...prevExpression,
			[name]: value,
		}));
	};

	const handleAddExpression = () => {
		if (expression.value !== "" && expression.score !== "") {
			addExpression(expression);
			setExpression({
				ruleType: "Age",
				value: "",
				operator: ">=",
				score: "",
			});
		} else {
			alert("Please fill in both Value and Score fields.");
		}
	};

	return (
		<div className='row mb-4'>
			<h1 className="text-primary mb-4">Expression Engine</h1>
			<div className='container text-center row mb-3'>
				<div className='col-md-3'>
					<select
						className='form-select'
						name='ruleType'
						value={expression.ruleType}
						onChange={handleChange}>
						<option value='Age'>Age</option>
						<option value='Credit Score'>Credit Score</option>
						<option value='Account Balance'>Account Balance</option>
					</select>
				</div>
				<div className='col-md-3'>
					<input
						type='text'
						className='form-control'
						placeholder='Value'
						name='value'
						value={expression.value}
						onChange={handleChange}
					/>
				</div>

				<div className='col-md-3'>
					<select
						className='form-select'
						name='operator'
						value={expression.operator}
						onChange={handleChange}>
						<option value='>'>{">"}</option>
						<option value='<'>{"<"}</option>
						<option value='>='>{">="}</option>
						<option value='<='>{"<="}</option>
						<option value='='>=</option>
					</select>
				</div>

				<div className='col-md-3'>
					<input
						type='text'
						className='form-control'
						placeholder='Score'
						name='score'
						value={expression.score}
						onChange={handleChange}
					/>
				</div>
				<div className='mt-3'>
					<button className='btn btn-warning col-md-2' onClick={handleAddExpression}>
						Add Expression
					</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
