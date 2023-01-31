import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Screen from './Screen'
import { Ionicons } from '@expo/vector-icons';


const QuizScreen = () => {
	return <>
		<Screen>
			<View className="flex-1">
				{/* topbar */}
				<View className="mt-4">
					<View className="flex-row justify-around items-center">
						<TouchableOpacity>
							<Ionicons name="arrow-back" size={36} color="black" />
						</TouchableOpacity>
						<Text className="text-lg font-bold">QuizName</Text>
						<Text className="text-lg font-bold">15:00</Text>
					</View>
				</View>

				{/* QuestionsBar */}
				<View className="flex-1 flex-row justify-around items-center px-5">
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View className="flex-row">
							<TouchableOpacity className="bg-primary px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl text-white">1</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">2</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">3</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">4</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">5</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">6</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">7</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">8</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">9</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-lg mx-2">
								<Text className="text-2xl">10</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</View>

				{/* Question & options*/}
				<View className="flex-[3]">
					<View className="px-5 py-3">
						<Text className="text-2xl font-bold">
							Where is the capital of India?
						</Text>
					</View>
					<View className="items-center mt-6">
						<TouchableOpacity className="w-10/12 bg-gray-200 justify-center items-center rounded-lg py-4">
							<Text className="text-xl">
								New Delhi
							</Text>
						</TouchableOpacity>
						<TouchableOpacity className="w-10/12 bg-gray-200 justify-center items-center rounded-lg py-4 mt-4">
							<Text className="text-xl">
								Mumbai
							</Text>
						</TouchableOpacity>
						<TouchableOpacity className="w-10/12 bg-gray-200 justify-center items-center rounded-lg py-4 mt-4">
							<Text className="text-xl">
								Kolkata
							</Text>
						</TouchableOpacity>
						<TouchableOpacity className="w-10/12 bg-gray-200 justify-center items-center rounded-lg py-4 mt-4">
							<Text className="text-xl">
								Chennai
							</Text>
						</TouchableOpacity>

					</View>
				</View>

				{/* Buttons */}
				<View className="flex-1 flex-row justify-around items-center px-5">
					<View className="flex-row flex-[2] justify-evenly">
						<TouchableOpacity className="bg-blue-200 px-5 py-3 rounded-lg items-center justify-center">
							<Ionicons name="arrow-back" size={34} color="white" />
						</TouchableOpacity>
						<TouchableOpacity className="bg-blue-200 px-5 py-3 rounded-lg items-center justify-center">
							<Ionicons name="arrow-forward" size={34} color="white" />
						</TouchableOpacity>
					</View>
					<TouchableOpacity className="bg-primary px-5 py-3 rounded-lg">
						<Text className="text-2xl text-white">Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Screen>
	</>
}

export default QuizScreen