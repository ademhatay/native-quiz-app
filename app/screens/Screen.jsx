import { View, Platform, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

const Screen = ({ children }) => {
	return <>
		<View style={styles.container}>
			{children}
		</View>
	</>
}

export default Screen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	},
})
