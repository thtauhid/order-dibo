import React from 'react'
import { CardItem, Body, Button, Text } from 'native-base'

const Picked = ({ updateOrder }) => {
	return (
		<CardItem>
			<Body>
				<Button
					success
					block
					onPress={() => updateOrder('Order Delivered', 'delivered')}>
					<Text>Mark as delivered</Text>
				</Button>
			</Body>
		</CardItem>
	)
}

export default Picked
