import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

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
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email"
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                onBlur={() => setFieldTouched("password")}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
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
