import React, { useState } from 'react'
import { Container, Content, Text, Button } from 'native-base'
import firebase from '../firebase'

import SignIn from './SignIn'

const Profile = () => {
	const [user, setUser] = useState(firebase.auth().currentUser)
	if (user) {
		return (
			<Container>
				<Content>
					<Text>Profile: {user}</Text>
					<Button onPress={firebase.auth().signOut()}>
						<Text>Logout</Text>
					</Button>
				</Content>
			</Container>
		)
	} else {
		return <SignIn setUser={setUser} /> //navigation.navigate('SignIn')
	}
}

export default Profile
