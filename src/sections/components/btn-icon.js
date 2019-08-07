import React from 'react'
import {
    Text,
	  TouchableHighlight,
  	TouchableOpacity,
  	TouchableWithoutFeedback,
  	StyleSheet
  } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';

function MutedFullScreen(props) {
	return (
  		<TouchableHighlight
  			onPress={props.onPress}
      	style={styles.container}
      	underlayColor={props.underlayColor ? props.underlayColor : 'gray'}
        hitSlop={{
          letf:5,
          top:5,
          bottom: 5,
          right: 5
        }}
  		>

      <Icon
        name={props.name ? props.name : 'check'}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : '#fff'}
      />

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
    marginVertical: 5,
  }
})

export default MutedFullScreen
