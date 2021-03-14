import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);

	return (
		<React.Fragment>
			<h1>{text || 'jonas hendel'}</h1>
			{text && <h1>Hello world</h1>}
			<button className='btn' onClick={() => setIsError(!isError)}>
				toggle error
			</button>
			{isError && <h1>Error</h1>}
      {isError ? (
        <p>There is an error</p>
      ):(
        <p>There is no error</p>
      )}
		</React.Fragment>
	);
};

export default ShortCircuit;
