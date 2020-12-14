import React, { useState, useRef } from 'react'
import { StyleSheet } from 'react-native'
import {
	Card,
	CardItem,
	Text,
	Button,
	Body,
	Input,
	Item,
	Container,
	Content,
	Left,
	Right,
} from 'native-base'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Constants from 'expo-constants'

import ShopNav from './navigation/ShopNav'
import OrdersNav from './navigation/OrdersNav'
import ProfileNav from './navigation/ProfileNav'

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const App = () => {
	const [isReady, setIsReady] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('')

	const recaptchaVerifier = useRef(null)

	const sendVerification = () => {
		const phoneProvider = new firebase.auth.PhoneAuthProvider()
		phoneProvider
			.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
			.then(setVerificationId)
	}

	const onChangePhoneNumber = (text) => {
		return setPhoneNumber(text)
	}

	const getFonts = () =>
		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		})

	if (isReady) {
		return (
			<>
				<Container>
					<Content>
						<FirebaseRecaptchaVerifierModal
							ref={recaptchaVerifier}
							firebaseConfig={Constants.manifest.extra.firebase}
						/>

						<Item regular>
							<Input
								placeholder='Phone Number'
								onChangeText={onChangePhoneNumber}
								// keyboardType='phone-pad'
								// autoCompleteType='tel'
							/>
						</Item>
					</Content>
				</Container>
			</>
			// <NavigationContainer>
			// 	<Drawer.Navigator>
			// 		<Drawer.Screen name='Shop' component={ShopNav} />
			// 		<Drawer.Screen name='Orders' component={OrdersNav} />
			// 		<Drawer.Screen name='Profile' component={ProfileNav} />
			// 	</Drawer.Navigator>
			// </NavigationContainer>
		)
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setIsReady(true)}
			/>
		)
	}
}
const styles = StyleSheet.create({
	icon: {
		width: 32,
		height: 32,
	},
})

export default App
