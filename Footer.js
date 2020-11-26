import React, { useContext } from 'react'
import { Footer, FooterTab, Button, Text } from 'native-base'

import { PriceContext } from './Contexts'

const FooterMenu = ({ history }) => {
	const { cartPrice, setCartPrice } = useContext(PriceContext)

	return (
		<Footer>
			<FooterTab>
				<Button full onPress={() => history.push('/checkout')}>
					<Text>Order Value: {cartPrice}</Text>
				</Button>
			</FooterTab>
		</Footer>
	)
}

export default FooterMenu
