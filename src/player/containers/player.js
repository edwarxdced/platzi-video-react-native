import React, {Component} from 'react'
import {
	View,
	Text,
	ActivityIndicator,
	StyleSheet
} from 'react-native'

import Video from 'react-native-video';
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import BtnIcon from '../../sections/components/btn-icon'

export class Player extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	loading: true,
	  	paused: true,
	  	duration: '00:00',
	  	currentTime: '00:00',
	  	fullScreen: false,
	  	muted: false,
	  	progress: 0,
	  };
	}

	leftPad = (number) => {
	  const pad = '00';
	  return pad.substring(0, pad.length - number.length) + number;
	}

	formattedTime = (secs) => {
	  const minutes = parseInt(secs / 60, 10);
	  const seconds = parseInt(secs % 60, 10);
	  return `${this.leftPad(minutes.toString())}:${this.leftPad(seconds.toString())}`
	}

	onLoad = ({duration}) => {
		this.setState({loading: false})
		this.setState({
			duration: this.formattedTime(duration),
			secondsDuration: duration
		})
	}

	playPause = () => {
	    this.setState({
	      paused: !this.state.paused
	    })
	}

	onProgress = (time) => {
		this.setState({
			currentTime: this.formattedTime(time.currentTime),
			currentSecond: time.currentTime,
			progress: ((time.currentTime * 100) / this.state.secondsDuration) / 100
		})
	}

	onFullScreen = () => {
		this.setState({fullScreen: !this.state.fullScreen})
		if (this.state.fullScreen) {
			this.video.presentFullscreenPlayer();
		} else {
			this.player.dismissFullscreenPlayer();
		}
	}

	onMuted = () => {
		this.setState({muted: !this.state.muted})
	}


	render() {
		return (
			<Layout
				loading={this.state.loading}
				video={
					<Video
			            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
			            style={styles.video}
			            resizeMode="contain"
			            paused={this.state.paused}
			            muted={this.state.muted}
			            onLoad={this.onLoad}
			            onProgress={this.onProgress}
			            fullscreen={this.fullScreen}
			            ref={(ref) => {
					        this.video = ref
					    }}
			          />
				}
				loader={
					<ActivityIndicator color="red" />
				}
				controls={
					<ControlLayout
						progress={this.state.progress}
					>
						<View style={styles.controlContainerLeft}>
							<PlayPause
								onPress={this.playPause}
	              				paused={this.state.paused}
							/>
							<Text style={styles.timer}>{this.state.currentTime}/{this.state.duration}</Text>
						</View>
						<View style={styles.controlContainerRight}>
							<BtnIcon
								name={this.state.muted ? 'volume-mute' : 'volume-up'}
								onPress={this.onMuted}
							/>
							<BtnIcon
								name={this.state.fullScreen ? 'compress' : 'expand'}
								onPress={this.onFullScreen}
							/>
						</View>
					</ControlLayout>
				}
			>
			</Layout>
		)
	}
}

const styles = StyleSheet.create({
	video: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    bottom: 0,
	    top: 0,
	},
	timer:{
		color: 'white',
		fontWeight: 'bold',
		fontSize: 14
	},
	controlContainerLeft: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	controlContainerRight:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
})

export default Player