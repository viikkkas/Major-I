import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";

export default function App(props) {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 10,
        paddingTop: 80,
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="Rs 100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
