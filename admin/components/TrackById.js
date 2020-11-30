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
	Button,
	Right,
	Form,
	Picker,
	Item,
} from 'native-base'
import api from '../api'

import AssignRider from './AssignRider'

const StatusPage = ({ route }) => {
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

	const updateOrder = (update, status) => {
		const newUpdate = [update, ...orderData.update]

		api.updateOrder(id, status, newUpdate).then((res) =>
			setOrderData(res.data)
		)
	}

	const Pending = () => {
		return (
			<CardItem>
				<Left>
					<Body>
						<Button
							danger
							onPress={() => {
								updateOrder('Order Cancelled', 'cancelled')
							}}>
							<Text>Cancel Order</Text>
						</Button>
					</Body>
				</Left>
				<Right>
					<Body>
						<Button
							success
							onPress={() => {
								updateOrder(
									'Order Accepted. Processing',
									'processing'
								)
							}}>
							<Text>Accept Order</Text>
						</Button>
					</Body>
				</Right>
			</CardItem>
		)
	}

	const Processing = () => {
		return (
			<CardItem>
				<Body>
					<Button
						block
						success
						onPress={() => {
							updateOrder(
								'Order Ready. Waiting for pickup.',
								'ready'
							)
						}}>
						<Text>Order ready</Text>
					</Button>
				</Body>
			</CardItem>
		)
	}

	return (
		<Container>
			<Content>
				<Card>
					<H3>Order Status</H3>
					{orderData.currentStatus == 'pending' ? <Pending /> : null}
					{orderData.currentStatus == 'processing' ? (
						<Processing />
					) : null}
					{orderData.currentStatus == 'ready' ? (
						<AssignRider updateOrder={updateOrder} id={id} />
					) : null}
				</Card>
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
							<CardItem>
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
							<CardItem>
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

export default StatusPage
