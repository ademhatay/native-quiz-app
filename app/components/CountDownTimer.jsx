import { useEffect, useState } from "react";
import { Text, View } from "react-native";

function CountDownTimer(props) {
	const [timerCount, setTimer] = useState(props.initialValue || 60)

	useEffect(() => {
		let interval = setInterval(() => {
			setTimer(lastTimerCount => {
				lastTimerCount <= 1 && clearInterval(interval)
				return lastTimerCount - 1
			})
		}, 1000)
		return () => clearInterval(interval)
	}, []);

	// the count down timer === 0 then call the function handleQuizSubmit
	if (timerCount === 0) {
		props.handleQuizSubmit();
	}

	return (
		<View>
			<Text className="text-lg font-bold">{timerCount}</Text>
		</View>
	)
}

export default CountDownTimer;