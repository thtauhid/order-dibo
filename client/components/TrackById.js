import React, { useState, useEffect } from 'react'
import {
	Card,
	CardItem,
	Text,
	Left,
	Body,
	H3,
	Container,
	Content,
} from 'native-base'
import api from '../api'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

const TrackById = ({ route }) => {
	const { id } = route.params

	const [orderData, setOrderData] = useState({
		cartItems: [
			{
				title: 'Loading...',
				price: 'Loading...',
			},
		],
		cartPrice: 'Loading...',
		address: 'Loading...',
		phoneNumber: 'Loading...',
		update: ['Loading...'],
	})

	useEffect(() => {
		api.getSingleOrder(id)
			.then((res) => {
				setOrderData(res.data)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<Container>
			<Content>
				<Card>
					<H3>Order Details</H3>
					<CardItem>
						<Left>
							<Body>
								<Text>Order ID</Text>
								<Text note>{id}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Price</Text>
								<Text note>Tk {orderData.cartPrice}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Address</Text>
								<Text note>{orderData.address}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Phone No</Text>
								<Text note>{orderData.phoneNumber}</Text>
							</Body>
						</Left>
					</CardItem>
				</Card>
				<Card>
					<H3>Items Ordered</H3>

					{orderData.cartItems.map((item) => {
						return (
							<CardItem key={uuid()}>
								<Left>
									<Body>
										<Text>{item.title}</Text>
										<Text note>Tk {item.price}</Text>
									</Body>
								</Left>
							</CardItem>
						)
					})}
				</Card>
				<Card>
					<H3>Order Update</H3>
					{orderData.update.map((item) => {
						return (
							<CardItem key={uuid()}>
								<Left>
									<Body>
										<Text>{item}</Text>
										{/* <Text note>12 AM</Text> */}
									</Body>
								</Left>
							</CardItem>
						)
					})}
				</Card>
			</Content>
		</Container>
	)
}

export default TrackById
