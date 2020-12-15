import React, { useState, useEffect } from 'react'
import { Text } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../components/Account'
import SignIn from '../components/SignIn'

import firebase from '../firebase'
const Stack = createStackNavigator()

const ProfileNav = () => {
	return (
		<Stack.Navigator initialRouteName='Account'>
			<Stack.Screen name='Account' component={Account} />
		</Stack.Navigator>
	)
}

export default ProfileNav
