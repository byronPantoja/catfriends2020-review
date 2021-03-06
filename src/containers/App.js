import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestPeople } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../index';
import './App.css';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchPeople.searchField,
		people: state.requestPeople.people,
		isPending: state.requestPeople.isPending,
		error: state.requestPeople.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestPeople: () => dispatch(requestPeople()),
	};
};
class App extends Component {
	componentDidMount() {
		this.props.onRequestPeople();
	}

	render() {
		const { searchField, onSearchChange, people, isPending } = this.props;
		const filteredCatpeople = people.filter((catPeople) => {
			return catPeople.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? (
			<h1>Loading</h1>
		) : (
			<div>
				<h1 className='f1'>C A T F R I E N D S</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList people={filteredCatpeople} />
				</Scroll>
			</div>
		);
	}
}
// --CSS background changes-- // from Una Kravets talk on Coding Tech
const changeBg = (color) => {
	document.documentElement.style.setProperty('--background', color);
};

onmousemove = (e) => {
	let valX = (e.clientX / document.body.clientWidth) * 255;
	let valY = (e.clientY / document.body.clientHeight) * 255;
	console.log(valX, valY);
	changeBg(`rgb(${valX}, ${valY}, 90)`);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
