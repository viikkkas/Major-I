import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.logoText}>Buy OR Sell</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => console.log("login")} />
        <AppButton
          color="secondary"
          title="Register"
          onPress={() => console.log("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;
