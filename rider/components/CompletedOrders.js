import React, { useEffect, useState } from 'react'
import {
	Body,
	Right,
	Button,
	Left,
	Text,
	Card,
	CardItem,
	Container,
	Content,
} from 'native-base'

import api from '../api'

const CompletedOrders = ({ navigation }) => {
	const [orederData, setOrederData] = useState([])

	useEffect(() => {
		api.getOrdersByRiderIdAndStatus(
			'283489094903792132', //riderId
			'delivered' //currentStatus
		).then((res) => setOrederData(res))
	}, [])

	return (
		<Container>
			<Content>
				{orederData.map((item) => {
					return (
						<Card key={item.ref['@ref'].id}>
							<CardItem>
								<Left>
									<Body>
										<Text>Order ID</Text>
										<Text note>#{item.ref['@ref'].id}</Text>
									</Body>
								</Left>
								<Right>
									<Body>
										<Text>Price</Text>
										<Text note>
											Tk {item.data.cartPrice}
										</Text>
									</Body>
								</Right>
							</CardItem>
							<CardItem>
								<Left>
									<Body>
										<Text>Address</Text>
										<Text note>{item.data.address}</Text>
									</Body>
								</Left>
								<Right>
									<Body>
										<Button
											block
											onPress={() =>
												navigation.navigate(
													'OrderDetails',
													{ id: item.ref['@ref'].id }
												)
											}>
											<Text>View Details</Text>
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

export default CompletedOrders
