import React, { useState } from 'react'
import { Image } from 'react-native'
import { Button, View, Text } from 'native-base'

const Home = ({ history, navigation }) => {
	return (
		<View style={{ alignItems: 'center' }}>
			<Image
				source={require('../assets/logo.jpg')}
				style={{ height: 210, width: 150, margin: 50 }}
			/>

			<Button block onPress={() => navigation.navigate('Shop')}>
				<Text>New Order</Text>
			</Button>
			<Text></Text>

			<Button block onPress={() => navigation.navigate('Track')}>
				<Text>Tracking</Text>
			</Button>
		</View>
	)
}

export default Home
