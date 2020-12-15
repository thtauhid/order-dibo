import React, { useState, useRef } from 'react'
import {
	Card,
	Text,
	Button,
	Body,
	Input,
	Item,
	Container,
	Content,
	H3,
} from 'native-base'
import firebase from '../firebase'

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'

const SignIn = ({ navigation }) => {
	const [isCodeSent, setIsCodeSent] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('')
	const [code, setCode] = useState('')
	const [verificationId, setVerificationId] = useState(null)
	const recaptchaVerifier = useRef(null)

	const countryCode = '+880'
	const phoneNumberWithCountryCode = countryCode + phoneNumber

	const sendVerificationCode = () => {
		const phoneProvider = new firebase.auth.PhoneAuthProvider()
		phoneProvider
			.verifyPhoneNumber(
				phoneNumberWithCountryCode,
				recaptchaVerifier.current
			)
			.then(setVerificationId)
			.then(setIsCodeSent(true))
	}

	const confirmCode = () => {
		const credential = firebase.auth.PhoneAuthProvider.credential(
			verificationId,
			code
		)
		firebase
			.auth()
			.signInWithCredential(credential)
			.then((result) => {
				console.log(result)
			})
			.then(navigation.navigate('Profile'))
	}

	const onChangePhoneNumber = (text) => {
		return setPhoneNumber(text)
	}

	return (
		<Container>
			<Content>
				<FirebaseRecaptchaVerifierModal
					ref={recaptchaVerifier}
					firebaseConfig={firebase.app().options}
				/>

				<Card style={{ marginTop: 50 }}>
					<H3
						style={{
							padding: 10,
							alignSelf: 'center',
							fontSize: 25,
						}}>
						Sign In
					</H3>
					<Item regular style={{ marginBottom: 20 }}>
						<Text>{countryCode}</Text>
						<Input
							placeholder='Phone Number'
							value={phoneNumber}
							onChangeText={onChangePhoneNumber}
							keyboardType='phone-pad'
							autoCompleteType='tel'
						/>
					</Item>
					<Button block onPress={sendVerificationCode}>
						<Text>Send Code</Text>
					</Button>
				</Card>

				{isCodeSent && (
					<Card style={{ marginTop: 20 }}>
						<Item regular style={{ marginBottom: 20 }}>
							<Input
								value={code}
								placeholder='Enter Code'
								onChangeText={setCode}
								keyboardType='phone-pad'
							/>
						</Item>
						<Button block onPress={confirmCode}>
							<Text>Verify</Text>
						</Button>
					</Card>
				)}
			</Content>
		</Container>
	)
}

export default SignIn
