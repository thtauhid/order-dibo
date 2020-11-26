import React, { useState, useContext } from 'react'
import {
	Card,
	CardItem,
	Text,
	Button,
	Left,
	Body,
	Right,
	View,
	H3,
	TouchableOpacity,
} from 'native-base'
import { TextInput } from 'react-native'
import api from './api'

import { PriceContext, CartItemsContext } from './Contexts'

const CheckOut = ({ history }) => {
	const { cartPrice, setCartPrice } = useContext(PriceContext)
	const { cartItems, setCartItems } = useContext(CartItemsContext)

	const [note, setNote] = useState('')
	const [address, setAddress] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')

	const [orderId, setOrderId] = useState(0)

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
			status: ['Order Placed'],
		}

		return api
			.createOrder(order)
			.then((res) => setOrderId(res.ref['@ref'].id))
			.then(() => {
				setCartPrice(0)
				setCartItems([])
			})
			.then(history.push(`/track/${orderId}`))
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
		<View>
			<H3>Checkout Page</H3>
			<Card>
				{cartItems.map(({ title, price }) => {
					return <CardX title={title} price={price} />
				})}
				<Text>Total: Tk {cartPrice}</Text>
			</Card>

			<Card>
				<TextInput
					placeholder='Special Note'
					value={note}
					onChangeText={onChnageNote}
				/>
				<TextInput
					placeholder='Address'
					value={address}
					onChangeText={onChnageAddress}
				/>
				<TextInput
					placeholder='Contact No'
					value={phoneNumber}
					onChangeText={onChnagePhoneNumber}
				/>
			</Card>

			<Button full onPress={checkOut}>
				<Text>Place Order</Text>
			</Button>
		</View>
	)
}

export default CheckOut
