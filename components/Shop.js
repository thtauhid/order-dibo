import React, { useState, useEffect, useContext } from 'react'
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
	Footer,
	FooterTab,
	Container,
	Content,
} from 'native-base'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { PriceContext, CartItemsContext } from '../Contexts'
import api from '../api'

const Shop = ({ navigation }) => {
	const { cartPrice, setCartPrice } = useContext(PriceContext)
	const { cartItems, setCartItems } = useContext(CartItemsContext)

	const [items, setItems] = useState([])

	useEffect(() => {
		api.getItems()
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

	const categories = () => {
		const categories = items.map((item) => item.category)
		return categories.filter((value, index) => {
			return categories.indexOf(value) === index
		})
	}

	const itemsByCategory = (category) => {
		const itemsx = items
			.filter((item) => item.category == category)
			.map((item) => item)
		return (
			<View key={uuid()}>
				<H3>{category}</H3>
				{itemsx.map((item) => {
					return (
						<ItemCard
							title={item.title}
							details={item.details}
							price={item.price}
							category={item.category}
							key={uuid()}
						/>
					)
				})}
			</View>
		)
	}

	const ItemCard = (item) => {
		return (
			<Card style={{ flex: 0 }}>
				<CardItem>
					<Left>
						<Body>
							<Text>{item.title}</Text>
							<Text note>{item.details}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem>
					<Left>
						<Text>Tk {item.price}</Text>
					</Left>
					<Right>
						<Button
							onPress={() => {
								const itemx = {
									key: uuid(),
									...item,
								}
								setCartPrice(cartPrice + itemx.price)
								setCartItems((prevItems) => [
									itemx,
									...prevItems,
								])
							}}>
							<Text>Add to cart</Text>
						</Button>
					</Right>
				</CardItem>
			</Card>
		)
	}

	return (
		<Container>
			<Content>
				{categories().map((category) => {
					return itemsByCategory(category)
				})}
			</Content>
			<Footer>
				<FooterTab>
					<Button
						full
						onPress={() => navigation.navigate('CheckOut')}>
						<Text>Order Value: {cartPrice}</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	)
}

export default Shop
