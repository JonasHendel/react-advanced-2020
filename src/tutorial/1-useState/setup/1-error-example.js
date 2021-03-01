import React from 'react';

const ErrorExample = () => {
  let title = 'random title'

  const handleClick = () => {
    title = 'hello people'
    console.log(title)
  }

  // Works, but the site isnt rerendered. Also there is no way to pass the updated title

  return(
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change title</button>
    </React.Fragment>
  )
};

export default ErrorExample;
