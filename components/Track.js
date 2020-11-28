import React, { useState, useEffect, useContext } from 'react'
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
import { PriceContext, CartItemsContext } from '../Contexts'
import api from '../api'

const Track = ({ navigation }) => {
	const { cartPrice, setCartPrice } = useContext(PriceContext)
	const { cartItems, setCartItems } = useContext(CartItemsContext)

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
						<Card>
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

export default Track
