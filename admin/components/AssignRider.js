import React, { useState, useEffect } from 'react'
import { Body, Button, CardItem, Item, Picker, Text } from 'native-base'
import api from '../api'
const AssignRider = ({ id, updateOrder }) => {
	const [selectedRider, setSelectedRider] = useState('')
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
			setRiders(data)
		})
	}, [])

	const assignRider = () => {
		api.assignRider(id, selectedRider).then((res) =>
			updateOrder('Rider Assigned.', 'ready')
		)
	}
	return (
		<CardItem>
			<Body>
				<Text>Select Rider</Text>
				<Item regular>
					<Picker
						style={{ height: 50, width: 200 }}
						mode='dialog'
						placeholder='Select Rider'
						placeholderStyle={{ color: '#bfc6ea' }}
						// note={false}
						selectedValue={selectedRider}
						onValueChange={(value) => setSelectedRider(value)}>
						{riders.map((item) => {
							return (
								<Picker.Item
									key={item.key}
									label={item.name}
									value={item.key}
								/>
							)
						})}
					</Picker>
				</Item>
				<Button block style={{ marginTop: 10 }} onPress={assignRider}>
					<Text>Assign Rider</Text>
				</Button>
			</Body>
		</CardItem>
	)
}

export default AssignRider
