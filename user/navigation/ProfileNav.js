import React from 'react'
import { Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../components/Account'
const Stack = createStackNavigator()

const ProfileNav = ({ navigation }) => {
	return (
		<Stack.Navigator initialRouteName='Account'>
			<Stack.Screen
				name='Account'
				component={Account}
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
		</Stack.Navigator>
	)
}

export default ProfileNav
