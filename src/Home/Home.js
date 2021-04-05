// import NewArray from '../NewArray/NewArray';
// import ArrayComponent from '../ArrayComponent/ArrayComponent';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';

const Home = (props) => {

	const [balance, updateBalance] = useState(200)
	const cost = useRef(0)
	const prevBalance = useRef()
	const [number, setNum] = useState(0)
	const calc = ((`${(number * 10.99) + (number * 10.99 * .07)}0` * 100 /100).toFixed(2))
	let balStatus = ''

	useEffect (() => {
		if(calc > balance){
			alert('exeeded balance!')
		}
	},[calc, balance])

	useEffect (() => {
		prevBalance.current = balance
	},[prevBalance.current, balance])

	const balanceUpdate = () => {
		updateBalance(balance => balance - calc)
	}


		const orderTwenty = () => {
			setNum(cost.current.value = Math.round((balance * .2) / 11.76))
		}

		const orderFourty = () => {
			setNum(cost.current.value = Math.round((balance * .4) / 11.76))
		}

		const orderSixty = () => {
			setNum(cost.current.value = Math.round((balance * .6) / 11.76))
		}

		const orderEighty = () => {
			setNum(cost.current.value = Math.round((balance * .8) / 11.76))
		}

		const orderOneHundered = () => {
			setNum(cost.current.value = Math.round(balance / 11.76))
		}

	return (
		<div> 
			<div>
				<p>You have a balance of ${balance}.00</p>
				<p>Your {(balance === prevBalance.current) ? <span>current</span> : <span>previous</span>} balance is ${prevBalance.current}</p>
				<input ref={cost} value={number} type="number" min="0" onChange={(e) => setNum(e.target.value)}/>
				<p> Your order includes {cost.current.value} tickets. </p>
				<p>Your total is ${calc}</p>
				<button onClick={orderTwenty}>20% of balance</button>
				<button onClick={orderFourty}>40% of balance</button>
				<button onClick={orderSixty}>60% of balance</button>
				<button onClick={orderEighty}>80% of balance</button>
				<button onClick={orderOneHundered}>100% of balance</button>
				</div>
				<input type="submit" style={{margin: "15px 0"}} onClick={balanceUpdate}/>
		</div>
	);
};

export default Home;


// useEffect(() => {
	// 	prevBalance.current = balance
	// },[balance])

	// const [ content, setContent ] = useState(' ');
	// const [ list, setList ] = useState([]);

	// useEffect(
	// 	() => {
	// 		fetch(`https://fakerestapi.azurewebsites.net/api/v1/${content}`)
	// 			.then((response) => response.json())
	// 			.then((json) => setList(json));
	// 	},
	// 	[content]
	// );

	{/* <Router>
				<Link to="/newArray">
					<span>New Array</span>
				</Link>
				<Link to="/array">
					<span>Array</span>
				</Link>
				<Route exact path="/newArray">
					<NewArray newArray={props.newArray} />
				</Route>
				<Route exact path="/array">
					<ArrayComponent addToNewArray={props.addToNewArray} />
				</Route>
			</Router>
				<button onClick={() => setContent('Activities')}>Activities</button>
				<button onClick={() => setContent('Authors')}>Authors</button>
				<button onClick={() => setContent('CoverPhotos')}>Cover Photos</button>
				<h1>{content}</h1>
				{list.map((item) => {
					return <pre key={item.id}>{JSON.stringify(item)}</pre>
				})} */}