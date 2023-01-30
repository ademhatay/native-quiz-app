import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MenuCard = ({ title = 'Hello', author, ...otherProps }) => {
	return <>
		<TouchableOpacity style={styles.menuCard} {...otherProps}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>

				<Text style={{ color: "#fff", fontSize: 20 }}>{title}</Text>
				{author && <Text style={{ color: "#fff", fontSize: 20 }}>{author}</Text>}
			</View>
		</TouchableOpacity>
	</>
}

export default MenuCard

const styles = StyleSheet.create({
	menuCard: {
		width: "90%",
		height: 150,
		backgroundColor: "#f2ba49",
		borderRadius: 10,
		marginVertical: 10,
	},
	icon: {
		width: 70,
		height: 70
	},
})