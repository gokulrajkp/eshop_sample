import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageComponent from "./ImageComponent";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Card({
  Collection,
  ProductTitle,
  Price,
  baseurl,
  images,
}) {
  var image = [];
  for (let i = 0; i < images.length; i++) {
    image.push(baseurl + images[i]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.collection}>{Collection}</Text>

      <View style={styles.card}>
        <ImageComponent image={image} />

        <Text style={{ textAlign: "center" }}>{ProductTitle}</Text>
        <Text style={{ textAlign: "center" }}>{Price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 4,
  },
  collection: {
    textAlign: "center",
  },
  card: {
    width: width / 2.2,
    height: height / 3,
    marginRight: 4,
    marginLeft: 4,
  },
});
