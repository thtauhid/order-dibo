import React, { useState } from 'react'
import { PriceContext, CartItemsContext } from '../Contexts'
import { createStackNavigator } from '@react-navigation/stack'

import Shop from '../components/Shop'
import CheckOut from '../components/CheckOut'

const Stack = createStackNavigator()

const ShopNav = () => {
	const [cartItems, setCartItems] = useState([])
	const [cartPrice, setCartPrice] = useState(0)

	return (
		<PriceContext.Provider value={{ cartPrice, setCartPrice }}>
			<CartItemsContext.Provider value={{ cartItems, setCartItems }}>
				<Stack.Navigator>
					<Stack.Screen name='Shop' component={Shop} />
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
