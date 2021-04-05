const FunctionalComponent = (props) => {
	return (
		<div className="container">
			<header className="header">
				<h1>Hello World</h1>
				<h2 style={props.state}>{props.TextProp}</h2>
				<button onClick={props.change}>color change</button>
			</header>
		</div>
	)
}

export default FunctionalComponent;