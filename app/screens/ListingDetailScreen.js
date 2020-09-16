import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>Rs 400</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/vikas.jpg")}
            title="Vikas Gupta"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailScreen;
