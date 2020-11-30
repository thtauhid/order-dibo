import React, { useState } from 'react'
import {
	Body,
	Button,
	Card,
	CardItem,
	Container,
	Content,
	Input,
	Item,
	Text,
} from 'native-base'
import api from '../api'
import { Alert } from 'react-native'

const CreateItem = ({ navigation }) => {
	const [title, setTitle] = useState('')
	const [details, setDetails] = useState('')
	const [price, setPrice] = useState('')
	const [category, setCategory] = useState('')
	const [deliveryTime, setDeliveryTime] = useState('')

	const onChnageTitle = (text) => {
		return setTitle(text)
	}

	const onChnageDetails = (text) => {
		return setDetails(text)
	}

	const onChnagePrice = (text) => {
		return setPrice(text.replace(/[^0-9]/g, ''))
	}

	const onChnageCategory = (text) => {
		return setCategory(text)
	}

	const onChnageDeliveryTime = (text) => {
		return setDeliveryTime(text)
	}

	const addItem = () => {
		api.createItem({ title, details, price, category, deliveryTime }).then(
			(res) => {
				Alert.alert(
					'Item Created!',
					`#${res.ref['@ref'].id}`,
					[
						{
							text: 'Add More Item',
							onPress: () => {
								setTitle('')
								setDetails('')
								setPrice('')
								setCategory('')
								setDeliveryTime('')
							},
						},
						{
							text: 'OK',
							onPress: () => navigation.goBack(),
						},
					],
					{ cancelable: false }
				)
			}
		)
	}

	return (
		<Container>
			<Content>
				<Card>
					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Item Name'
									value={title}
									onChangeText={onChnageTitle}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Details'
									value={details}
									onChangeText={onChnageDetails}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Price. (Numbers only. e.g.: 200)'
									value={price}
									onChangeText={onChnagePrice}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Category'
									value={category}
									onChangeText={onChnageCategory}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Estimated Delivery Time. (e.g.: 40 Minutes)'
									value={deliveryTime}
									onChangeText={onChnageDeliveryTime}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button block onPress={addItem}>
								<Text>Add Item</Text>
							</Button>
						</Body>
					</CardItem>
				</Card>
			</Content>
		</Container>
	)
}

export default CreateItem
