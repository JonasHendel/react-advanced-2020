import React, { useState } from 'react';
import { Fragment } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }

	return (
		<Fragment>
			{people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
            <button className='btn' onClick={()=> removeItem(id)}>Remove</button>
					</div>
				);
			})}
			<button className='btn' onClick={() => setPeople([])}>Clear Items</button>
		</Fragment>
	);
};

export default UseStateArray;
