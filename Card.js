import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { Link } from "react-router-native"
const Card = ({ image, title, text, fee }) => {
  return (
    <View style={styles.cardBox}>
      <Link to="/order/anything">
        <View>
          <Image
            style={styles.cardImage}
            source={{
              uri: image,
            }}
          />
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardText}>{text}</Text>
          <Text style={styles.cardFee}>Tk {fee} delivery fee</Text>
        </View>
      </Link>
    </View>
  )
}
const styles = StyleSheet.create({
  cardBox: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ddd",
  },

  cardImage: {
    width: 300,
    height: 200,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cardText: {},

  cardFee: {
    fontWeight: "bold",
  },
})

export default Card
