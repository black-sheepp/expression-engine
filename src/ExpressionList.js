import React from "react";

const ExpressionList = ({ rules, deleteExpression }) => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				{rules.length === 0 ? (
					<p>-------</p>
				) : (
					<table className='table'>
						<thead>
							<tr>
								<th>Rule Type</th>
								<th>Value</th>
								<th>Operator</th>
								<th>Score</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{rules.map((rule, index) => (
								<tr key={index}>
									<td>{rule.ruleType}</td>
									<td>{rule.value}</td>
									<td>{rule.operator}</td>
									<td>{rule.score}</td>
									<td>
										<button
											className='btn btn-danger'
											onClick={() => deleteExpression(index)}>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default ExpressionList;
