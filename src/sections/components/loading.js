import React from 'react';

import {
	View,
	Text,
	Image,
	ActivityIndicator,
	StyleSheet
} from 'react-native';

function loading(props){
    return (
      <View style={styles.container}>
      		<Image
      			source={require('../../../assets/logo.png')}
      			style={styles.logo}
      		/>
      		<ActivityIndicator />
      </View>
    );
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo:{
		width: 200,
		height: 80,
		marginBottom: 10,
		resizeMode: 'contain'
	}
});

export default loading;