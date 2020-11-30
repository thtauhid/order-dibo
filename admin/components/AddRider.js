import React, { useState } from 'react'
import {
	Item,
	Input,
	Body,
	Button,
	Card,
	CardItem,
	Container,
	Content,
	Text,
} from 'native-base'
import { Alert } from 'react-native'
import api from '../api'

const AddRider = ({ navigation }) => {
	const [name, setName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')

	const onChnageName = (text) => {
		setName(text)
	}

	const onChnagePhoneNumber = (text) => {
		setPhoneNumber(text.replace(/[^0-9]/g, ''))
	}

	const addRider = () => {
		api.addRider({ name, phoneNumber }).then((res) =>
			Alert.alert(
				'Item Created!',
				`#${res.ref['@ref'].id}`,
				[
					{
						text: 'Add More Rider',
						onPress: () => {
							setName('')
							setPhoneNumber('')
						},
					},
					{
						text: 'OK',
						onPress: () => navigation.goBack(),
					},
				],
				{ cancelable: false }
			)
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
							<Button block onPress={addRider}>
								<Text>Add Rider</Text>
							</Button>
						</Body>
					</CardItem>
				</Card>
			</Content>
		</Container>
	)
}

export default AddRider
