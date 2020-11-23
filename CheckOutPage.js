import React, { useState } from "react"
import { View, Text, TextInput } from "react-native"
import { Link } from "react-router-native"

const CheckOut = (props) => {
  const [cartPrice, setCartPrice] = useState(props.location.state.price)
  const [itemsOrdered, setItemsOrdered] = useState(
    props.location.state.itemsOrdered
  )
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const Card = ({ title, price }) => {
    return (
      <View>
        <Text>{title}</Text>
        <Text>{price}</Text>
        <Text></Text>
      </View>
    )
  }

  const onChnageAddress = (text) => {
    return setAddress(text)
  }
  const onChnagePhoneNumber = (text) => {
    return setPhoneNumber(text)
  }
  return (
    <View>
      <Text>Checkout Page</Text>
      {console.log(itemsOrdered)}
      {itemsOrdered.map(({ title, price }) => {
        return <Card title={title} price={price} />
      })}
      <Text>Price: {cartPrice}</Text>
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={onChnageAddress}
      />
      <TextInput
        placeholder="Contact No"
        value={phoneNumber}
        onChangeText={onChnagePhoneNumber}
      />
      <Text>Place Order</Text>
      <Link to="/">
        <Text>Back</Text>
      </Link>
    </View>
  )
}

export default CheckOut
