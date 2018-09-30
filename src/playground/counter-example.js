import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0,
			headTitle: 'Count example',
			headSub: 'count starts at zero',
		};
	}
	componentDidMount() {
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount, 10);

		if (!isNaN(count)) {
			this.setState(() => ({ count }));
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}
	handleAddOne() {
		this.setState(prevState => {
			return {
				count: prevState.count + 1,
			};
		});
	}
	handleMinusOne() {
		this.setState(prevState => {
			return {
				count: prevState.count - 1,
			};
		});
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0,
			};
		});
	}
	render() {
		return (
			<div>
				<Header headTitle={this.state.headTitle} headSub={this.state.headSub} />
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

class Header extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.headTitle}</h1>
				<h3>{this.props.headSub}</h3>
			</div>
		);
	}
} // Header class

export default Counter;
