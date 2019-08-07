import React, {Component} from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import API from '../../utils/api'

export class Search extends Component {
	state = {
		text: ''
	}
	handleSubmit = async () => {
		const results = await API.searchMovie(this.state.text)
		/*this.props.dispatch({
			type: 'SET_SELECTED_MOVIE',
			payload: {movie: movie[0]}
		})*/
		await this.props.dispatch({
			type: 'SET_SEGGESTION_LIST',
			payload: {
				suggestionList: results,
				searchs: true
			}
		})
	}

	handleChangeText = (text) => {
	    this.setState({
	      text
	    })
	}
	render() {
	    return (
	      <TextInput
	        placeholder="Busca tu película favorita"
	        autoCorrent={false}
	        autoCapitalize="none"
	        underlineColorAndroid="transparent"
	        onSubmitEditing={this.handleSubmit}
	        onChangeText={this.handleChangeText}
	        style={styles.input}
	      />
	    )
	}
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

export default connect(null)(Search);