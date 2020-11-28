import React, { useState, useContext } from 'react'
import {
	Card,
	CardItem,
	Text,
	Button,
	Body,
	Input,
	Item,
	Container,
	Content,
	Left,
	Right,
} from 'native-base'
import api from '../api'

import { PriceContext, CartItemsContext } from '../Contexts'

const CheckOut = ({ navigation }) => {
	const { cartPrice, setCartPrice } = useContext(PriceContext)
	const { cartItems, setCartItems } = useContext(CartItemsContext)

	const deliveryCharge = 30

	const [note, setNote] = useState('')
	const [address, setAddress] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')

	const onChnageNote = (text) => {
		return setNote(text)
	}
	const onChnageAddress = (text) => {
		return setAddress(text)
	}
	const onChnagePhoneNumber = (text) => {
		return setPhoneNumber(text)
	}

	const deleteItem = (value) => {
		const newCartItems = cartItems.filter((item) => item.key !== value)
		return setCartItems(newCartItems)
	}

	const checkOut = () => {
		const order = {
			cartItems,
			cartPrice: cartPrice + deliveryCharge,
			note,
			address,
			phoneNumber,
			update: ['Order Placed'],
			currentStatus: 'pending',
			userId: 5,
			riderId: 0,
		}

		api.createOrder(order)
			.then((res) => {
				setCartPrice(0)
				setCartItems([])
				setNote('')
				setAddress('')
				setPhoneNumber('')
				navigation.navigate('TrackById', { id: res.ref['@ref'].id })
			})
			.catch((err) => console.log('Error: ', err))
	}

	const CardX = ({ title, price, value }) => {
		return (
			<CardItem key={value}>
				<Left>
					<Body>
						<Text>{title}</Text>
						<Text note>Tk {price}</Text>
					</Body>
				</Left>
				<Right>
					<Body>
						<Button
							bordered
							danger
							onPress={() => {
								deleteItem(value)
								setCartPrice(cartPrice - price)
							}}>
							<Text>Remove</Text>
						</Button>
					</Body>
				</Right>
			</CardItem>
		)
	}

	return (
		<Container>
			<Content>
				<Card>
					{cartItems.map((item) => {
						return (
							<CardX
								key={item.key}
								value={item.key}
								title={item.title}
								price={item.price}
								category={item.category}
							/>
						)
					})}
				</Card>

				<Card>
					<CardItem>
						<Left>
							<Body>
								<Text>Tk {cartPrice}</Text>
								<Text note>Total</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Tk 30</Text>
								<Text note>Delivery Charge</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Left>
							<Body>
								<Text>Tk {cartPrice + deliveryCharge}</Text>
								<Text note>Sub Total</Text>
							</Body>
						</Left>
					</CardItem>
				</Card>

				<Card>
					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Special Note'
									value={note}
									onChangeText={onChnageNote}
								/>
							</Item>
						</Body>
					</CardItem>

					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Address'
									value={address}
									onChangeText={onChnageAddress}
								/>
							</Item>
						</Body>
					</CardItem>

					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Contact No'
									value={phoneNumber}
									onChangeText={onChnagePhoneNumber}
								/>
							</Item>
						</Body>
					</CardItem>
				</Card>

				<Button full onPress={checkOut}>
					<Text>Place Order</Text>
				</Button>
			</Content>
		</Container>
	)
}

export default CheckOut
