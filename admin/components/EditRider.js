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

const EditRider = ({ navigation, route }) => {
	const { id } = route.params

	const [name, setName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')

	useEffect(() => {
		api.getSingleRider(id).then((res) => {
			setName(res.data.name)
			setPhoneNumber(res.data.phoneNumber)
		})
	}, [])

	const onChnageName = (text) => {
		setName(text)
	}

	const onChnagePhoneNumber = (text) => {
		setPhoneNumber(text.replace(/[^0-9]/g, ''))
	}

	const editRider = () => {
		api.updateRider(id, {
			name,
			phoneNumber,
		}).then((res) => {
			Alert.alert(
				'Rider Updated!',
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

	const deleteRider = () => {
		Alert.alert(
			'Warning!',
			`Do you want to delete the Rider?`,
			[
				{
					text: 'No',
					onPress: () => navigation.goBack(),
				},
				{
					text: 'Yes',
					onPress: () =>
						api.deleteRider(id).then((res) => {
							Alert.alert(
								'Deleted!',
								`Rider Successfully deleted!`,
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
									placeholder='Rider Name'
									value={name}
									onChangeText={onChnageName}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Item regular>
								<Input
									placeholder='Phone Number'
									value={phoneNumber}
									onChangeText={onChnagePhoneNumber}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button block onPress={editRider}>
								<Text>Update Rider</Text>
							</Button>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button danger block onPress={deleteRider}>
								<Text>Delete Rider</Text>
							</Button>
						</Body>
					</CardItem>
				</Card>
			</Content>
		</Container>
	)
}

export default EditRider
