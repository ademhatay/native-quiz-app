import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Screen from './Screen'
import { Ionicons } from '@expo/vector-icons';
import { data } from '../data/data'
import CountDownTimer from '../components/CountDownTimer'

const QuizScreen = () => {
	const [questions, setQuestions] = useState(data);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState([]);

	const handleQuizSubmit = () => {
		let correctAnswers = 0;
		selectedOption.forEach((item) => {
			if (item.option === questions[item.questionId - 1].answer) {
				correctAnswers++;
			}
		})
		alert(`You have answered ${correctAnswers} out of ${questions.length} questions correctly`)
	}


	const handleSelectOption = (option, questionId) => {
		const selectedOptionIndex = selectedOption.findIndex((item) => item.questionId === questionId);
		if (selectedOptionIndex === -1) {
			setSelectedOption([...selectedOption, { questionId, option }]);
		} else {
			const newSelectedOption = [...selectedOption];
			newSelectedOption[selectedOptionIndex] = { questionId, option };
			setSelectedOption(newSelectedOption);
		}

	}
	const handleNextQuestion = () => {
		if (questionIndex < questions.length - 1) {
			setQuestionIndex(questionIndex + 1);
		} else {
			setQuestionIndex(0);
		}
	}

	const handlePreviousQuestion = () => {
		if (questionIndex > 0) {
			setQuestionIndex(questionIndex - 1);
		} else {
			setQuestionIndex(questions.length - 1);
		}
	}

	return <>
		<Screen>
			<View className="flex-1">
				{/* topbar */}
				<View className="mt-4">
					<View className="flex-row justify-around items-center">
						<TouchableOpacity>
							<Ionicons name="arrow-back" size={36} color="black" />
						</TouchableOpacity>
						<Text className="text-lg font-bold">Capital Quiz</Text>
						<CountDownTimer  handleQuizSubmit={handleQuizSubmit} />
					</View>
				</View>

				{/* QuestionsBar */}
				<View className="flex-1 flex-row justify-around items-center px-5">
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}

					>
						<View className="flex-row">
							{
								questions.map((question) => {
									return <TouchableOpacity
										onPress={() => setQuestionIndex(Number(question.id) - 1)}
										key={question.id}
										className={`${Number(question.id) === (questionIndex + 1) ? 'bg-primary' : 'bg-gray-200'} px-5 py-3 rounded-lg mx-2`}>
										<Text className="text-2xl">{question.id}</Text>
									</TouchableOpacity>
								})
							}
						</View>
					</ScrollView>
				</View>

				{/* Question & options*/}
				<View className="flex-[3]">
					<View className="px-5 py-3">
						<Text className="text-2xl font-bold">
							{questions[questionIndex].question}
						</Text>
					</View>
					<View className="items-center gap-5">
						{
							questions[questionIndex].options.map((option) => {
								return <TouchableOpacity
									onPress={() => handleSelectOption(option, questions[questionIndex].id)}
									key={option}
									className={`${selectedOption.find((item) => item.questionId === questions[questionIndex].id)?.option === option ? 'bg-primary' : 'bg-gray-200'} px-5 py-3 rounded-lg w-10/12 items-center`}>
									<Text className="text-2xl">{option}</Text>
								</TouchableOpacity>
							})
						}

					</View>
				</View>

				{/* Buttons */}
				<View className="flex-1 flex-row justify-around items-center px-5">
					<View className="flex-row flex-[2] justify-evenly">
						<TouchableOpacity
							onPress={handlePreviousQuestion}
							className="bg-blue-200 px-5 py-3 rounded-lg items-center justify-center"
						>
							<Ionicons name="arrow-back" size={34} color="white" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={handleNextQuestion}
							className="bg-blue-200 px-5 py-3 rounded-lg items-center justify-center"
						>
							<Ionicons name="arrow-forward" size={34} color="white" />
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						onPress={handleQuizSubmit}
						className="bg-primary px-5 py-3 rounded-lg">
						<Text className="text-xl text-white">Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Screen>
	</>
}

export default QuizScreen