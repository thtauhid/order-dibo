import React, { useEffect, useState } from 'react'
import {
	Text,
	H2,
	Card,
	CardItem,
	Body,
	Left,
	Right,
	Button,
	Container,
	Content,
} from 'native-base'
import api from '../api'

const OrdersByCurrentStatus = ({ route, navigation }) => {
	const { status } = route.params

	const [data, setData] = useState([])

	useEffect(() => {
		api.getOrdersByCurrentStatus(status)
			.then((res) => {
				setData(res)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<Container>
			<Content>
				{data.map((item) => {
					return (
						<Card key={item.ref['@ref'].id}>
							<CardItem>
								<Left>
									<Body>
										<Text>Order ID</Text>
										<Text note>{item.ref['@ref'].id}</Text>
									</Body>
								</Left>
							</CardItem>
							<CardItem>
								<Left>
									<Body>
										<Text>Price</Text>
										<Text note>
											Tk {item.data.cartPrice}
										</Text>
									</Body>
								</Left>
								<Right>
									<Button
										onPress={() =>
											navigation.navigate('TrackById', {
												id: item.ref['@ref'].id,
											})
										}>
										<Text>View Details</Text>
									</Button>
								</Right>
							</CardItem>
						</Card>
					)
				})}
			</Content>
		</Container>
	)
}

export default OrdersByCurrentStatus
