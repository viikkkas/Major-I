import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  return (
    <Screen>
      <View style={styles.headerContainer}>
        <AppText style={styles.header}>LOGIN</AppText>
        <ListItemSeperator />
      </View>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
              />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />
              <AppButton title="Submit" onPress={handleSubmit} />
            </>
          )}
        </Formik>
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
