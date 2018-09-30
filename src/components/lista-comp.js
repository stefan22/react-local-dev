import React, { Component } from 'react';

class Lista extends Component {
	constructor(props, count) {
		super(props);
		this.count = Number(count);
		this.handleDeleteAll = this.handleDeleteAll.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelOption = this.handleDelOption.bind(this);
		this.state = {
			title: 'List 5',
			subtitle: 'broken down into components: header,options,add options',
			options: props.defOptions,
		};
	}

	componentDidMount() {
		console.log('component did mount');
		const jsondata = localStorage.getItem('options');
		const locstordata = JSON.parse(jsondata);

		// this.setState((locstordata) => {
		//    return {
		//       options: locstordata
		//    }
		// });
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('component did update');
		if (prevState.options.length !== this.state.options.length) {
			console.log('saving data');
			const jsondata = JSON.stringify(this.state.options);
			localStorage.setItem('options', jsondata);
		} //if
	}

	componentWillUnmount() {
		console.log('will unmount');
	}

	removeOneArray(arr, ele) {
		if (arr.length > 0) {
			return arr.filter(e => e !== ele);
		}
	}

	handleDelOption(e) {
		let tar = e.target.parentElement.textContent.trim().split('');
		tar = tar.slice(0, tar.length - 6).join(''); //ele text
		let pos = this.state.options.indexOf(tar); //ele pos

		this.setState((prevState, props) => {
			//prevState.options.splice(pos, 1);
			return {
				options: this.removeOneArray(prevState.options, tar),
			};
		});
	}

	handleSubmit(itm) {
		this.state.prevOptions = this.state.options;
		if (itm !== '' && this.state.prevOptions.indexOf(itm) == -1) {
			this.setState(() => {
				return {
					options: this.state.options.concat(itm),
				};
			});
		}
	} // handleSubmit

	handleDeleteAll() {
		console.log('delete all');
		this.setState(() => {
			return {
				options: [],
			};
		});
	}
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<Header title={this.state.title} subtitle={this.state.subtitle} />
				<Options options={this.state.options} handleDelOption={this.handleDelOption} />
				<AddOption handleSubmit={this.handleSubmit} handleDeleteAll={this.handleDeleteAll} />
			</div>
		);
	}
} // Lista class

Lista.defaultProps = {
	defOptions: ['buy shoes', 'buy iPad', 'buy milk'],
};

class Header extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
} // Header class

class Options extends Component {
	render() {
		const optionx = this.props.options;
		return (
			<ul style={{ listStyle: 'none' }}>
				{optionx.map((opt, index) => {
					return (
						<li key={index}>
							{opt}
							<button style={{ marginLeft: '10px' }} onClick={this.props.handleDelOption}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		);
	} //render
} // Options class

class AddOption extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: undefined,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		let listvalue = e.target.children[0].value;
		const error = this.props.handleSubmit(listvalue);
		this.setState(() => {
			return {
				error: error,
			};
		});
	} //handleSubmit

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" id="addOption" className="addOption" placeholder="add option" />
					<button type="submit">Add Option</button>
				</form>
				<button onClick={this.props.handleDeleteAll}>Delete All</button>
			</div>
		);
	} // render
} // AddOption class

export default Lista;
