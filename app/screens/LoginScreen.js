import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <AppText style={styles.header}>LOGIN</AppText>
        <ListItemSeperator />
      </View>
      <View style={styles.container}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <AppButton
          title="Submit"
          onPress={() => console.log(email, password)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 50,
    fontWeight: "600",
    color: colors.primary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  headerContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
