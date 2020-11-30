import React from 'react'
import { CardItem, Body, Button, Text } from 'native-base'

const Ready = ({ updateOrder }) => {
	return (
		<CardItem>
			<Body>
				<Button
					block
					onPress={() => updateOrder('Order Picked', 'picked')}>
					<Text>Pick Item</Text>
				</Button>
			</Body>
		</CardItem>
	)
}

export default Ready
