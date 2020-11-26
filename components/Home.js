import React, { useState } from 'react'
import { Image } from 'react-native'
import { Button, View, Text } from 'native-base'

const Home = ({ history }) => {
	return (
		<View style={{ alignItems: 'center' }}>
			<Image
				source={require('./assets/logo.jpg')}
				style={{ height: 210, width: 150, margin: 50 }}
			/>

			<Button block onPress={() => history.push('/shop')}>
				<Text>New Order</Text>
			</Button>
			<Text></Text>

			<Button block onPress={() => history.push('/track')}>
				<Text>Tracking</Text>
			</Button>
		</View>
	)
}

export default Home
