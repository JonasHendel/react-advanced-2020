import React, { useState } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0);

	const reset = () => {
		setValue(0);
	};

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

	return (
		<React.Fragment>
			<section style={{ margin: '4rem 9' }}>
				<h2>Regular Counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={() => setValue(value + 1)}>
					Increase
				</button>
				<button className='btn' onClick={() => setValue(value - 1)}>
					Decrease
				</button>
				<button className='btn' onClick={reset}>
					Reset
				</button>
			</section>
      <section style={{ margin: '4rem 9' }}>
				<h2>Complex Counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={complexIncrease}>
					Increase
				</button>
			</section>
		</React.Fragment>
	);
};

export default UseStateCounter;
