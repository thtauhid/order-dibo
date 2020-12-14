import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../components/Profile'
const Stack = createStackNavigator()

const ProfileNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Profile' component={Profile} />
		</Stack.Navigator>
	)
}

export default ProfileNav
