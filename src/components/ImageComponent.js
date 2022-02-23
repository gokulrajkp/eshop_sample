import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ImageComponent({ image, index }) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.contectContariner}
    >
      {image.map((item, i) => (
        <Image
          key={i}
          source={{
            uri: item,
          }}
          style={styles.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contectContariner: {
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
