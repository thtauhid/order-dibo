import React, { useState, useEffect } from 'react'
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

const EditItem = ({ navigation, route }) => {
	const { id } = route.params

	const [title, setTitle] = useState('')
	const [details, setDetails] = useState('')
	const [price, setPrice] = useState('')
	const [category, setCategory] = useState('')
	const [deliveryTime, setDeliveryTime] = useState('')

	useEffect(() => {
		api.getSingleItem(id).then((res) => {
			setTitle(res.data.title)
			setDetails(res.data.details)
			setPrice(res.data.price)
			setCategory(res.data.category)
			setDeliveryTime(res.data.deliveryTime)
		})
	}, [])

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

	const editItem = () => {
		api.updateItem(id, {
			title,
			details,
			price,
			category,
			deliveryTime,
		}).then((res) => {
			Alert.alert(
				'Item Updated!',
				`#${res.ref['@ref'].id}`,
				[
					{
						text: 'OK',
						onPress: () => navigation.goBack(),
					},
				],
				{ cancelable: false }
			)
		})
	}

	const deleteItem = () => {
		Alert.alert(
			'Warning!',
			`Do you want to delete the Item?`,
			[
				{
					text: 'No',
					onPress: () => navigation.goBack(),
				},
				{
					text: 'Yes',
					onPress: () =>
						api.deleteItem(id).then((res) => {
							Alert.alert(
								'Deleted!',
								`Item Successfully deleted!`,
								[
									{
										text: 'Okay',
										onPress: () => navigation.goBack(),
									},
								],
								{ cancelable: false }
							)
						}),
				},
			],
			{ cancelable: false }
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
							<Button block onPress={editItem}>
								<Text>Update item</Text>
							</Button>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button danger block onPress={deleteItem}>
								<Text>Delete Rider</Text>
							</Button>
						</Body>
					</CardItem>
				</Card>
			</Content>
		</Container>
	)
}

export default EditItem
