import React from 'react';
const NewArray = (props) => {
	return (
		<div>
			<div>{props.newArray.map((item) => <div>{item.item}</div>)}</div>
		</div>
	);
};

export default NewArray;

