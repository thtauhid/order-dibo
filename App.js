import React, { useState } from 'react'
import * as Font from 'expo-font'
import { PriceContext, CartItemsContext } from './Contexts'
import Home from './components/Home'
import Shop from './components/Shop'
import CheckOut from './components/CheckOut'
import Track from './components/Track'
import TrackById from './components/TrackById'
import { AppLoading } from 'expo'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const App = () => {
	const [cartItems, setCartItems] = useState([])
	const [cartPrice, setCartPrice] = useState(0)
	const [isReady, setIsReady] = useState(false)

	const getFonts = () =>
		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		})

	const Stack = createStackNavigator()

	if (isReady) {
		return (
			<PriceContext.Provider value={{ cartPrice, setCartPrice }}>
				<CartItemsContext.Provider value={{ cartItems, setCartItems }}>
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
								name='Shop'
								component={Shop}
								options={{ title: 'Shop' }}
							/>
							<Stack.Screen
								name='Track'
								component={Track}
								options={{ title: 'Track' }}
							/>
							<Stack.Screen
								name='TrackById'
								component={TrackById}
								options={{ title: 'Track Order' }}
							/>
							<Stack.Screen
								name='CheckOut'
								component={CheckOut}
								options={{ title: 'Checkout' }}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</CartItemsContext.Provider>
			</PriceContext.Provider>
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
