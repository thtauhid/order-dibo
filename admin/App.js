import React, { useState } from 'react'
import * as Font from 'expo-font'
import Home from './components/Home'
import Orders from './components/Orders'
import Items from './components/Items'
import CreateItem from './components/CreateItem'
import EditItem from './components/EditItem'
import { AppLoading } from 'expo'
import OrdersByCurrentStatus from './components/OrdersByCurrentStatus'
import TrackById from './components/TrackById'
import Riders from './components/Riders'
import AddRider from './components/AddRider'
import EditRider from './components/EditRider'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

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
						name='Orders'
						component={Orders}
						options={{ title: 'Orders' }}
					/>
					<Stack.Screen
						name='Items'
						component={Items}
						options={{ title: 'Items' }}
					/>
					<Stack.Screen
						name='CreateItem'
						component={CreateItem}
						options={{ title: 'Create New Item' }}
					/>
					<Stack.Screen
						name='EditItem'
						component={EditItem}
						options={{ title: 'Edit Item' }}
					/>
					<Stack.Screen
						name='OrdersByCurrentStatus'
						component={OrdersByCurrentStatus}
						options={({ route }) => ({
							title: `Orders: ${route.params.status}`,
						})}
					/>
					<Stack.Screen
						name='TrackById'
						component={TrackById}
						options={({ route }) => ({
							title: `#${route.params.id}`,
						})}
					/>
					<Stack.Screen
						name='Riders'
						component={Riders}
						options={{ title: 'Riders' }}
					/>
					<Stack.Screen
						name='AddRider'
						component={AddRider}
						options={{ title: 'Add Rider' }}
					/>
					<Stack.Screen
						name='EditRider'
						component={EditRider}
						options={{ title: 'Edit Rider' }}
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
