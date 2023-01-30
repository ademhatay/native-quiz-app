import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Screen from './Screen'
import MenuCard from '../components/MenuCard'

const Home = () => {
	return <>
		<Screen>
			<ScrollView className="w-full bg-white">
				<View className="flex-1 items-center">
					<MenuCard title="Quiz 1" author="adem" />
					<MenuCard title="Quiz 2" author="adem" />
					<MenuCard title="Quiz 3" author="adem" />
					<MenuCard title="Quiz 4" author="adem" />
					<MenuCard title="Quiz 5" author="adem" />
					<MenuCard title="Quiz 6" author="adem" />
				</View>
			</ScrollView>
		</Screen>
	</>
}

export default Home