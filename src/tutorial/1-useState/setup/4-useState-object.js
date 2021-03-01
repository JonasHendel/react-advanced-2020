import React, { useState, Fragment } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Peter",
		age: 24,
		message: 'random message',
	});
  const changeMessage = () => {
    
    setPerson({...person, message:'hello world'})
  }

	return (
    <Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Change message</button>  
    </Fragment>
  )
};

export default UseStateObject;
