import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../components/Account'
const Stack = createStackNavigator()

const ProfileNav = () => {
	return (
		<Stack.Navigator initialRouteName='Account'>
			<Stack.Screen name='Account' component={Account} />
		</Stack.Navigator>
	)
}

export default ProfileNav
