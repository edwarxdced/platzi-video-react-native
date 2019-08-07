import React, {Component} from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'

import API from './utils/api'
import Home from './screens/containers/home.js'
import Header from './sections/containers/header'
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list'
import Movie from '../src/screens/containers/movie'
import Search from './sections/containers/search'

export class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	async componentDidMount() {
		const suggestionList = await API.getSuggestion(13106);
		await this.props.dispatch({
			type: 'SET_CATEGORY_LIST',
			payload: {suggestionList}
		})

		const categoryList = await API.getMovies();
		await this.props.dispatch({
			type: 'SET_SEGGESTION_LIST',
			payload: {categoryList}
		})
	}

	render() {

		if (this.props.selectedMovie) {
			return <Movie />
		} else if (this.props.searchs) {
			return (<Home>
					        <Header/>
					        <Search/>
				       		<SuggestionList />
				      	</Home>)
		}


		return (
			<Home>
		        <Header/>
		        <Search/>
	       		<CategoryList />
	       		<SuggestionList />
	      	</Home>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedMovie: state.selectedMovie,
		searchs: state.searchs
	}
}
export default connect(mapStateToProps)(App)