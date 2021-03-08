import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0)

  useEffect(() => {
    if(value >= 1){
      document.title = `New Messages(${value})`
    }
  }) // [] => only runs on first render [value] => runs whenever value is changed

  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className='btn' onClick={() => {setValue(value + 1)}}>Increase value</button>
    </React.Fragment>
  )
};

export default UseEffectBasics;
