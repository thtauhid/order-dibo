import React, { useState, useEffect } from 'react'
import { Container, Header, Title, Content, Body, Text } from 'native-base'
import * as Font from 'expo-font'
import { NativeRouter as Router, Route } from 'react-router-native'
import { PriceContext, CartItemsContext } from './Contexts'
import Home from './Home'
import OrderPage from './OrderPage'
import CheckOutPage from './CheckOutPage'
import StatusPage from './StatusPage'
import Track from './Track'
import FooterMenu from './Footer'

const App = () => {
	const [cartItems, setCartItems] = useState([])
	const [cartPrice, setCartPrice] = useState(0)
	const [isReady, setIsReady] = useState(false)
	useEffect(() => {
		;async () => {
			await Font.loadAsync({
				// Roboto: require('native-base/Fonts/Roboto.ttf'),
				// Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				Roboto_medium: require('./assets/roboto-medium.ttf'),
			})
			setIsReady(true)
		}
	}, [])

	if (isReady) {
		return <Text>Hi</Text>
	} else {
		return (
			<PriceContext.Provider value={{ cartPrice, setCartPrice }}>
				<CartItemsContext.Provider value={{ cartItems, setCartItems }}>
					<Router>
						<Container>
							<Header>
								<Body style={{ alignItems: 'center' }}>
									<Title>Order Dibo Ltd.</Title>
								</Body>
							</Header>
							<Content>
								<Route path='/' exact component={Home} />
								<Route
									path='/order'
									exact
									component={OrderPage}
								/>
								<Route path='/track' component={Track} />
								<Route
									path='/track/:id'
									component={StatusPage}
								/>
								<Route
									path='/checkout'
									component={CheckOutPage}
								/>
							</Content>
							<Route path='/order' component={FooterMenu} />
						</Container>
					</Router>
				</CartItemsContext.Provider>
			</PriceContext.Provider>
		)
	}
}

export default App
