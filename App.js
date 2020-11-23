import React, { useState } from "react"
import { StyleSheet, ScrollView } from "react-native"

import Home from "./Home"
import OrderPage from "./OrderPage"
import CheckOutPage from "./CheckOutPage"

import { NativeRouter as Router, Route } from "react-router-native"

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Router>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={OrderPage} />
        <Route path="/checkout" component={CheckOutPage} />
      </Router>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
})
