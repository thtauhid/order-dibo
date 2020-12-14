import React, { useState, useEffect } from 'react'
import {
	Card,
	CardItem,
	Text,
	Button,
	Left,
	Body,
	Right,
	Container,
	Content,
} from 'native-base'
import api from '../api'

const Orders = ({ navigation }) => {
	const [items, setItems] = useState([])

	useEffect(() => {
		api.getOrdersByUserId(5)
			.then((items) => {
				const data = items.map((item) => {
					const { id: key } = item.ref['@ref']
					return {
						key,
						...item.data,
					}
				})
				setItems(data)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<Container>
			<Content>
				{items.map((item) => {
					return (
						<Card key={item.key}>
							<CardItem>
								<Left>
									<Body>
										<Text>Order ID</Text>
										<Text note>{item.key}</Text>
									</Body>
								</Left>
							</CardItem>
							<CardItem>
								<Left>
									<Body>
										<Text>Price</Text>
										<Text note>Tk {item.cartPrice}</Text>
									</Body>
								</Left>
							</CardItem>
							<CardItem>
								<Left>
									<Body>
										<Text>Status</Text>
										<Text note>{item.update[0]}</Text>
									</Body>
								</Left>
								<Right>
									<Body>
										<Button
											onPress={() =>
												navigation.navigate(
													'TrackById',
													{
														id: item.key,
													}
												)
											}>
											<Text>View Order</Text>
										</Button>
									</Body>
								</Right>
							</CardItem>
						</Card>
					)
				})}
			</Content>
		</Container>
	)
}

export default Orders
