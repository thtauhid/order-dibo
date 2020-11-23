import React, { useState } from "react"
import { StyleSheet, FlatList } from "react-native"
import Card from "./Card"

const Home = () => {
  const [data, setData] = useState([
    {
      image: "https://picsum.photos/300/200",
      title: "Dream Food Industry",
      text: "$$, Set Menu, Ice Cream, Upto 50% off",
      fee: "9",
    },
    {
      image: "https://picsum.photos/300/200",
      title: "Food Fantasy",
      text: "$$$, Set Menu, Upto 20% off",
      fee: "19",
    },
    {
      image: "https://picsum.photos/300/200",
      title: "Fat Belly",
      text: "$, Set Menu, Upto 50% off",
      fee: "19",
    },
    {
      image: "https://picsum.photos/300/200",
      title: "Nazu's Kitchen",
      text: "$, Burger, Upto 50% off",
      fee: "0",
    },
  ])
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <Card
            image={item.image}
            title={item.title}
            text={item.text}
            fee={item.fee}
          />
        )
      }}
    />
  )
}

export default Home
