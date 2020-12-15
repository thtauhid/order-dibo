import React from 'react'
import { Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import Orders from '../components/Orders'
import TrackById from '../components/TrackById'

const Stack = createStackNavigator()

const OrdersNav = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Orders'
				component={Orders}
				options={{
					headerLeft: () => (
						<Feather
							name='menu'
							size={28}
							color='black'
							style={{ marginLeft: 30 }}
							onPress={() => navigation.toggleDrawer()}
						/>
					),
				}}
			/>
			<Stack.Screen
				name='TrackById'
				component={TrackById}
				options={{ title: 'Track Order' }}
			/>
		</Stack.Navigator>
	)
}

export default OrdersNav
