// import ClassComponent from './ClassComponent/ClassComponent'
// import FunctionalComponent from './FunctionalComponent/FunctionalComponent'
import Home from './Home/Home'
import React, { useState } from 'react'

function App() {

	const [ newArray, setArray ] = useState([]);

	const addToNewArray = (item) => {
		setArray([ ...newArray, item ]);
	};

	// const [state, setState] = useState({color: 'red', backgroundColor: 'black'});

	// const [count, setCount ] = useState(0)

	// const TextProp = 'Hello World'

	// 	const colorChange = () => {
	// 	setCount(count => count + 1);
	// 	if(count %2 === 0) {
	// 		setState({color: 'green', backgroundColor: 'white' });
	// 	} else {
	// 	 setState({color: 'red', backgroundColor: 'black' });
	// 	}
	// }


  return (
    <div className="App">
			{/* <ClassComponent TextProp={TextProp} />
			<FunctionalComponent TextProp={TextProp} change={colorChange} state={state}/> */}
			{/* <ArrayComponent addToNewArray={addToNewArray}/> */}
			<Home newArray={newArray} addToNewArray={addToNewArray}/>
    </div>
  );
}

export default App;

