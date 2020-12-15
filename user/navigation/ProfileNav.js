import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../components/Profile'
import SignIn from '../components/SignIn'

const Stack = createStackNavigator()

const ProfileNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='SignIn' component={SignIn} />
		</Stack.Navigator>
	)
}

export default ProfileNav
