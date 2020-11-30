import React from 'react'
import {
	Button,
	Text,
	Container,
	Content,
	Card,
	CardItem,
	Body,
} from 'native-base'

const Orders = ({ navigation }) => {
	const buttons = [
		'pending',
		'processing',
		'ready',
		'picked',
		'delivered',
		'cancelled',
	]
	return (
		<Container>
			<Content style={{ marginTop: 30 }}>
				<Card>
					<CardItem>
						<Body>
							{buttons.map((item) => {
								return (
									<Button
										block
										onPress={() =>
											navigation.navigate(
												'OrdersByCurrentStatus',
												{
													status: item,
												}
											)
										}
										style={{ marginBottom: 20 }}>
										<Text>{item}</Text>
									</Button>
								)
							})}
						</Body>
					</CardItem>
				</Card>
			</Content>
		</Container>
	)
}

export default Orders
