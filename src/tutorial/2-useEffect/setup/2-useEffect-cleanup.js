import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(()=>{
      window.addEventListener('resize', checkSize)
      console.log(size)
      return ()=>{
        window.removeEventListener('resize', checkSize)
        console.log('cleanup')
      }//this return is called after the second render, size is Displayed once, but when it is rerendered, the return is called
  })
	return(
    <React.Fragment>
    <h1>Window</h1>      
    <h2>{size} PX</h2>
    </React.Fragment>
  ) 
};

export default UseEffectCleanup;
