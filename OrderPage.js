import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Link } from "react-router-native"
const OrderPage = () => {
  const [items, setItems] = useState([
    {
      key: "1",
      title: "Grilled Chicken",
      details: "XYZ",
      price: 90,
      category: "FasFood",
    },
    {
      key: "2",
      title: "Grilled Chicken",
      details: "XYZ",
      price: 180,
      category: "FasFood",
    },
    {
      key: "3",
      title: "Grilled Chicken",
      details: "XYZ",
      price: 90,
      category: "FastFood",
    },
    {
      key: "4",
      title: "Thai Soup",
      details: "Tastes good!",
      price: 320,
      category: "Thai",
    },
  ])
  const [itemsOrdered, setItemsOrdered] = useState([])
  const [cartPrice, setCartPrice] = useState(0)

  //   Get unique categories
  const categories = () => {
    const categories = items.map((item) => item.category)
    return categories.filter((value, index) => {
      return categories.indexOf(value) === index
    })
  }
  const itemsByCategory = (category) => {
    const itemsx = items
      .filter((item) => item.category == category)
      .map((item) => item)
    return (
      <View style={styles.categoryBox}>
        <Text>{category}</Text>
        {itemsx.map(({ title, details, price }) => {
          return (
            <CardItem
              title={title}
              details={details}
              price={price}
              category={category}
            />
          )
        })}
      </View>
    )
  }
  const CardItem = (item) => {
    return (
      <View style={styles.itemBox}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDetails}>{item.details}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text
          onPress={() => {
            setCartPrice(cartPrice + item.price)
            setItemsOrdered((prevItems) => [item, ...prevItems])
          }}
        >
          Add to Cart
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.orderPage}>
      {/* Items */}
      {categories().map((category) => {
        return itemsByCategory(category)
      })}

      {/* Cart Price */}
      <Link
        to={{
          pathname: "/checkout",
          state: {
            price: cartPrice,
            itemsOrdered: itemsOrdered,
          },
        }}
      >
        <Text>Total Price: {cartPrice}</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  orderPage: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 50,
  },
  categoryBox: {
    padding: 20,
  },

  itemBox: {
    borderBottomWidth: 1 / 2,
    borderBottomColor: "#ddd",
    marginBottom: 10,
    backgroundColor: "#ddd",
  },

  title: {
    fontSize: 20,
    marginBottom: 5,
  },

  itemTitle: {},

  itemDetails: { marginBottom: 5 },

  itemPrice: { marginBottom: 10 },
})

export default OrderPage
