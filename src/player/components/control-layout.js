import React from 'react'
import {View, ProgressBarAndroid, StyleSheet} from 'react-native'

function ControlLayout(props) {
	return (
		<View style={{flex: 1}}>
			<View style={styles.container}>
				{props.children}
			</View>

			<View style={styles.container2}>
				<ProgressBarAndroid
					styleAttr="Horizontal"
					progress={props.progress ? props.progress : 0}
					indeterminate={false}
					scaleY={5}
					style={{height:4}}
				/>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
	    backgroundColor: 'rgba(0,0,0,.8)',
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    bottom: 0,
	    height: 35,
	    flexDirection: 'row',
	    paddingHorizontal: 10,
	    alignItems: 'center',
	    justifyContent: 'space-between'
	},
	container2: {
	    left: 0,
	    right: 0,
	}
})
export default ControlLayout