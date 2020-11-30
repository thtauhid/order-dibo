import React from 'react'
import { Image } from 'react-native'
import {
	Button,
	View,
	Text,
	Container,
	Content,
	Card,
	CardItem,
	Body,
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
								onPress={() => navigation.navigate('Orders')}>
								<Text>Orders</Text>
							</Button>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button
								block
								onPress={() => navigation.navigate('Items')}>
								<Text>Items</Text>
							</Button>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button
								block
								onPress={() => navigation.navigate('Riders')}>
								<Text>Riders</Text>
							</Button>
						</Body>
					</CardItem>
				</Card>
			</Content>
		</Container>
	)
}

export default Home
