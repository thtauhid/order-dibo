import React, { useEffect, useState } from 'react'
import {
	Text,
	Button,
	Card,
	CardItem,
	Container,
	Content,
	Body,
	Left,
	Right,
} from 'native-base'
import api from '../api'

const Riders = ({ navigation }) => {
	const [riders, setRiders] = useState([])

	useEffect(() => {
		api.getRiders().then((res) => {
			const data = res.map((item) => {
				const { id: key } = item.ref['@ref']
				return {
					key,
					...item.data,
				}
			})
			console.log(data)
			setRiders(data)
		})
	}, [])

	const AddRider = () => {
		return (
			<Card>
				<CardItem>
					<Body>
						<Button
							block
							onPress={() => navigation.navigate('AddRider')}>
							<Text>Add Rider</Text>
						</Button>
					</Body>
				</CardItem>
			</Card>
		)
	}
	return (
		<Container>
			<Content>
				<AddRider />
				{riders.map((item) => {
					return (
						<Card key={item.key}>
							<CardItem>
								<Left>
									<Body>
										<Text>{item.name}</Text>
										<Text>{item.phoneNumber}</Text>
									</Body>
								</Left>
								<Right>
									<Body>
										<Button
											onPress={() => {
												navigation.navigate(
													'EditRider',
													{ id: item.key }
												)
											}}>
											<Text>Edit</Text>
										</Button>
									</Body>
								</Right>
							</CardItem>
						</Card>
					)
				})}
			</Content>
		</Container>
	)
}

export default Riders
