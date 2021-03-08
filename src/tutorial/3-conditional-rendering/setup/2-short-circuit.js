import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return(
    <React.Fragment>
      <h1>{text || 'jonas hendel'}</h1>
      {text && <h1>Hello world</h1>}
      {!text && <h1>Bye world</h1>}
    </React.Fragment>
  ) 
};

export default ShortCircuit;
