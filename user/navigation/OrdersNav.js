import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Orders from '../components/Orders'
import TrackById from '../components/TrackById'

const Stack = createStackNavigator()

const OrdersNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Orders' component={Orders} />
			<Stack.Screen
				name='TrackById'
				component={TrackById}
				options={{ title: 'Track Order' }}
			/>
		</Stack.Navigator>
	)
}

export default OrdersNav
