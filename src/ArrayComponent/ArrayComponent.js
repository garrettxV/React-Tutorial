import React from 'react';
import { useState } from 'react';

const ArrayComponent = (props) => {
	const [ objects ] = useState([
		{
			id: 1,
			item: 'orange'
		},
		{
			id: 2,
			item: 'pear'
		},
		{
			id: 3,
			item: 'banana'
		},
		{
			id: 4,
			item: 'grapes'
		},
		{
			id: 5,
			item: 'apple'
		},
		{
			id: 6,
			item: 'pineapple'
		}
	]);

	return (
		<div>
			<div>
				{objects.map((item) => (
					<div key={item.id}>
						{item.item}
						<button onClick={() => props.addToNewArray(item)}>Add</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ArrayComponent;
