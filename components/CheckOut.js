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
} from 'native-base'
import api from '../api'

import { PriceContext, CartItemsContext } from '../Contexts'

const CheckOut = ({ navigation }) => {
	const { cartPrice, setCartPrice } = useContext(PriceContext)
	const { cartItems, setCartItems } = useContext(CartItemsContext)

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

	const checkOut = () => {
		const order = {
			cartItems,
			cartPrice,
			note,
			address,
			phoneNumber,
			update: ['Order Placed'],
			// status: 'pending',
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

	const CardX = ({ title, price }) => {
		return (
			<CardItem>
				<Body>
					<Text>{title}</Text>
					<Text note>Tk {price}</Text>
				</Body>
			</CardItem>
		)
	}

	return (
		<Container>
			<Content>
				<Card>
					{cartItems.map(({ title, price }) => {
						return <CardX title={title} price={price} />
					})}
					<CardItem>
						<Body>
							<Text>Total</Text>
							<Text note>Tk {cartPrice}</Text>
						</Body>
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
