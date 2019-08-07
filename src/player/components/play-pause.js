import React from 'react'
import {
    Text,
	  TouchableHighlight,
  	TouchableOpacity,
  	TouchableWithoutFeedback,
  	StyleSheet
  } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

function PlayPause(props) {
	return (
		<TouchableHighlight
			onPress={props.onPress}
    	style={styles.container}
    	underlayColor="gray"
      hitSlop={{
        letf:5,
        top:5,
        bottom: 5,
        right: 5
      }}
		>
			{
		        props.paused ?
		        <Icon name="play" size={20} color="#fff" />
		        :
		        <Icon name="pause" size={20} color="#fff" />
		    }
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
  }
})

export default PlayPause
