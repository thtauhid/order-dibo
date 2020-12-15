import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { PriceContext, CartItemsContext } from '../Contexts'
import { createStackNavigator } from '@react-navigation/stack'

import Shop from '../components/Shop'
import CheckOut from '../components/CheckOut'

const Stack = createStackNavigator()

const ShopNav = ({ navigation }) => {
	const [cartItems, setCartItems] = useState([])
	const [cartPrice, setCartPrice] = useState(0)

	return (
		<PriceContext.Provider value={{ cartPrice, setCartPrice }}>
			<CartItemsContext.Provider value={{ cartItems, setCartItems }}>
				<Stack.Navigator>
					<Stack.Screen
						name='Shop'
						component={Shop}
						options={{
							headerLeft: () => (
								<Feather
									name='menu'
									size={28}
									color='black'
									style={{ marginLeft: 30 }}
									onPress={() => navigation.toggleDrawer()}
								/>
							),
						}}
					/>
					<Stack.Screen
						name='CheckOut'
						component={CheckOut}
						options={{ title: 'Checkout' }}
					/>
				</Stack.Navigator>
			</CartItemsContext.Provider>
		</PriceContext.Provider>
	)
}

export default ShopNav
