import React, { useState } from 'react'
import { Image } from 'react-native'
import {
	Button,
	Text,
	Card,
	CardItem,
	Body,
	Container,
	Content,
} from 'native-base'

const Home = ({ navigation }) => {
	return (
		<Container>
			<Content>
				<Image
					source={require('../assets/logo.jpg')}
					style={{
						height: 210,
						width: 150,
						margin: 50,
						alignSelf: 'center',
					}}
				/>
				<Card>
					<CardItem>
						<Body>
							<Button
								block
								onPress={() => navigation.navigate('Shop')}>
								<Text>New Order</Text>
							</Button>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button
								block
								onPress={() => navigation.navigate('Track')}>
								<Text>Track Order</Text>
							</Button>
						</Body>
					</CardItem>
				</Card>
			</Content>
		</Container>
	)
}

export default Home
