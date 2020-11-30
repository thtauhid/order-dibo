import React, { useEffect, useState } from 'react'
import {
	Button,
	Card,
	CardItem,
	Container,
	Content,
	Body,
	Text,
	Item,
	Left,
	Right,
} from 'native-base'
import api from '../api'

const Items = ({ navigation }) => {
	const [items, setItems] = useState([])

	useEffect(() => {
		api.getItems().then((res) => {
			const data = res.map((item) => {
				const { id: key } = item.ref['@ref']
				return {
					key,
					...item.data,
				}
			})
			console.log(data)
			setItems(data)
		})
	}, [])

	const CreateItem = () => {
		return (
			<Card>
				<CardItem>
					<Body>
						<Button
							block
							onPress={() => navigation.navigate('CreateItem')}>
							<Text>Add Item</Text>
						</Button>
					</Body>
				</CardItem>
			</Card>
		)
	}
	return (
		<Container>
			<Content>
				<CreateItem />
				{items.map((item) => {
					return (
						<Card key={item.key}>
							<CardItem>
								<Left>
									<Body>
										<Text>{item.title}</Text>
										<Text note>{item.details}</Text>
									</Body>
								</Left>
								<Right>
									<Body>
										<Text>{item.category}</Text>
									</Body>
								</Right>
							</CardItem>
							<CardItem>
								<Left>
									<Body>
										<Text>{item.deliveryTime} Mins</Text>
										<Text>Tk {item.price}</Text>
									</Body>
								</Left>
								<Right>
									<Body>
										<Button
											block
											onPress={() =>
												navigation.navigate(
													'EditItem',
													{ id: item.key }
												)
											}>
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

export default Items
