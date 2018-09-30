import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	componentDidMount() {
		console.log('componentDidMount');
		let mntCnt = localStorage.getItem('count');
		mntCnt = parseInt(mntCnt, 10);
		if (!isNaN(mntCnt)) {
			console.log(mntCnt);
			this.setState(() => {
				return {
					count: mntCnt,
				};
			});
		}
	} //compDidMount

	componentDidUpdate(prevProps, prevState) {
		if (Number(prevState.count) !== Number(this.state.count)) {
			console.log('component updated');
			let setCount = Number(this.state.count);
			localStorage.setItem('count', setCount);
		}
	} //compDidUpdate

	componentWillUnmount() {
		console.log('componentWillUnmount');
	} //compWillUpdate

	handleAddOne() {
		this.setState(prevState => {
			return {
				count: prevState.count + 1,
			};
		});
	} // handleAddOne

	handleMinusOne() {
		this.setState(prevState => {
			return {
				count: prevState.count - 1,
			};
		});
	} // handleMinusOne

	handleReset() {
		this.setState(() => {
			return {
				count: 0,
			};
		});
	} // handleReset

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<div>
					<button onClick={this.handleAddOne} id="addone">
						+1
					</button>

					<button onClick={this.handleMinusOne} id="minusone">
						-1
					</button>
					<button onClick={this.handleReset} id="reset">
						Reset
					</button>
				</div>
			</div>
		);
	} //render
} // Counter class

export default Counter;
