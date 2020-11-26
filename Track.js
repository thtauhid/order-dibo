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
} from 'native-base'

import { PriceContext, CartItemsContext } from './Contexts'
import api from './api'

const Track = () => {
	const { cartPrice, setCartPrice } = useContext(PriceContext)
	const { cartItems, setCartItems } = useContext(CartItemsContext)

	const [items, setItems] = useState([])

	useEffect(() => {
		api.getItems()
			.then((items) => {
				const data = items.map((item) => {
					const { id: key } = item.ref['@ref']
					let { title, details, price, category } = item.data
					return {
						key,
						title,
						details,
						price,
						category,
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
			<View>
				<H3>{category}</H3>
				{itemsx.map((item) => {
					return (
						<ItemCard
							title={item.title}
							details={item.details}
							price={item.price}
							category={item.category}
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
								setCartPrice(cartPrice + item.price)
								setCartItems((prevItems) => [
									item,
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
		<View>
			{categories().map((category) => {
				return itemsByCategory(category)
			})}
		</View>
	)
}

export default Track
