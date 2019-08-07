import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Animated
} from 'react-native';

import MovieLayout from '../components/movie'
import Player from '../../player/containers/player'
import Header from '../../sections/containers/header'
import Close from '../../sections/components/close'
import Details from '../../videos/components/details'
import API from '../../utils/api'

export class Movie extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	opacity: new Animated.Value(0),
	  	movieDetails: {}
	  };
	}

	componentDidMount() {
		this.getDetails();
	    Animated.timing(
	      this.state.opacity,
	      {
	        toValue: 1,
	        duration: 1000,
	      }
	    ).start();

	}

	getDetails = async () => {
		const movieDetails = await API.getDetails(this.props.movie.id)
		this.setState({movieDetails})
		console.log(movieDetails);
	}

	closeVideo = ()  => {
		this.props.dispatch({
			type: 'SET_SELECTED_MOVIE',
			payload: {
				movie: null
			}
		})
	}
	render() {
		return (
			<MovieLayout>
				<Header>
					<Close
						onPress={this.closeVideo}
					/>
				</Header>
				<Player />
				<Details
					{...this.state.movieDetails}
				/>
			</MovieLayout>
		)
	}
}
function mapStateToProps(state){
	return {
		movie : state.selectedMovie
	}
}
export default connect(mapStateToProps)(Movie)