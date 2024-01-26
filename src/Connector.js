
import React from "react";

const Connector = ({ combinator, onCombinatorChange }) => {
	return (
		<div className='row mt-3'>
			<div className='container text-center col-md-3'>
				<label htmlFor='combinator' className='form-label'>
					Connector
				</label>
				<select
					className='form-select'
					id='combinator'
					value={combinator}
					onChange={(e) => onCombinatorChange(e.target.value)}>
					<option value='and'>AND</option>
					<option value='or'>OR</option>
				</select>
			</div>
		</div>
	);
};

export default Connector;
