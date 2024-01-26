import React, { useState } from "react";
import Form from "./Form";
import ExpressionList from "./ExpressionList";
import Connector from "./Connector";
import OutputDisplay from "./OutputDisplay";

const App = () => {
	const [rules, setRules] = useState([]);
	const [combinator, setCombinator] = useState("and");
	const [showOutput, setShowOutput] = useState(false);

	const addExpression = (expression) => {
		setRules([...rules, expression]);
	};

	const deleteExpression = (index) => {
		const updatedRules = [...rules];
		updatedRules.splice(index, 1);
		setRules(updatedRules);
	};

	const handleCombinatorChange = (value) => {
		setCombinator(value);
	};

	const handleSubmit = () => {
		console.log({
			rules,
			combinator,
		});
		setShowOutput(true);
	};

	return (
		<div>
			<div className='container text-center mt-4'>
				<Form addExpression={addExpression} />
				<ExpressionList rules={rules} deleteExpression={deleteExpression} />
				<Connector combinator={combinator} onCombinatorChange={handleCombinatorChange} />
				<button className='btn btn-success mt-3' onClick={handleSubmit}>
					Submit
				</button>
			</div>
			<div className='container'>{showOutput && <OutputDisplay rules={rules} combinator={combinator} />}</div>
		</div>
	);
};

export default App;
