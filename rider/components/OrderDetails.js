import {
	Left,
	Body,
	Card,
	CardItem,
	Container,
	Content,
	Text,
	Button,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import Ready from './Ready'
import Picked from './Picked'

import api from '../api'

const OrderDetails = ({ route }) => {
	const { id } = route.params
	const [orderDetails, setOrderDetails] = useState({
		cartItems: [
			{
				key: 'Loading...',
				title: 'Loading...',
				details: 'Loading...',
				price: 'Loading...',
				category: 'Loading...',
			},
		],
		cartPrice: 'Loading...',
		note: 'Loading...',
		address: 'Loading...',
		phoneNumber: 'Loading...',
		update: ['Loading...'],
		currentStatus: 'Loading...',
		userId: 'Loading...',
		riderId: 'Loading...',
	})

	useEffect(() => {
		api.getSingleOrder(id).then((res) => setOrderDetails(res.data))
	}, [])

	const updateOrder = (update, status) => {
		const newUpdate = [update, ...orderDetails.update]

		api.updateOrder(id, status, newUpdate).then((res) =>
			setOrderDetails(res.data)
		)
	}

	return (
		<Container>
			<Content>
				<Card>
					<CardItem>
						<Left>
							<Body>
								<Text>Order ID</Text>
								<Text note>#{id}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Orders</Text>
								{orderDetails.cartItems.map((item) => {
									return (
										<Text note key={item.key}>
											{item.title}: {item.price}
										</Text>
									)
								})}
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Price</Text>
								<Text note>Tk {orderDetails.cartPrice}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Note</Text>
								<Text note>{orderDetails.note}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Phone Number</Text>
								<Text note>{orderDetails.phoneNumber}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Address</Text>
								<Text note>{orderDetails.address}</Text>
							</Body>
						</Left>
					</CardItem>

					{orderDetails.currentStatus == 'ready' ? (
						<Ready updateOrder={updateOrder} />
					) : null}
					{orderDetails.currentStatus == 'picked' ? (
						<Picked updateOrder={updateOrder} />
					) : null}
					{orderDetails.currentStatus == 'delivered' ? (
						<Button block disabled>
							<Text>Delivered</Text>
						</Button>
					) : null}
				</Card>
			</Content>
		</Container>
	)
}

export default OrderDetails
