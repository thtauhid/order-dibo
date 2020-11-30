import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/Home'
import CompletedOrders from './components/CompletedOrders'
import OrderDetails from './components/OrderDetails'

const App = () => {
	const [isReady, setIsReady] = useState(false)

	const getFonts = () =>
		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		})

	const Stack = createStackNavigator()

	if (isReady) {
		return (
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Home'
					screenOptions={{ headerShown: true }}>
					<Stack.Screen
						name='Home'
						component={Home}
						options={{ title: 'Home' }}
					/>
					<Stack.Screen
						name='CompletedOrders'
						component={CompletedOrders}
						options={{ title: 'Completed Orders' }}
					/>
					<Stack.Screen
						name='OrderDetails'
						component={OrderDetails}
						options={{ title: 'Order Details' }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		)
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setIsReady(true)}
			/>
		)
	}
}
export default App
