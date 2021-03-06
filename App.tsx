import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { HomeScreen } from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
