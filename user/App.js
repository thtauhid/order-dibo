import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import ShopNav from './navigation/ShopNav'
import OrdersNav from './navigation/OrdersNav'
import ProfileNav from './navigation/ProfileNav'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const App = () => {
	const [isReady, setIsReady] = useState(false)

	const getFonts = () =>
		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		})

	if (isReady) {
		return (
			<NavigationContainer>
				<Drawer.Navigator>
					<Drawer.Screen name='Shop' component={ShopNav} />
					<Drawer.Screen name='Orders' component={OrdersNav} />
					<Drawer.Screen name='Profile' component={ProfileNav} />
				</Drawer.Navigator>
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
const styles = StyleSheet.create({
	icon: {
		width: 32,
		height: 32,
	},
})

export default App
