
import React from "react";

const OutputDisplay = ({ rules, combinator }) => {
	return (
		<div className='row mt-4'>
			<div className='col-md-12'>
				<h3>JSON Data:</h3>
				<pre>{JSON.stringify({ rules, combinator }, null, 2)}</pre>
			</div>
		</div>
	);
};

export default OutputDisplay;
