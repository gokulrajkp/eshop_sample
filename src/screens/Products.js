import { View, FlatList } from "react-native";
import React from "react";
import getProducts from "../data/ProductData";
import Card from "../components/Card";

export default function Products({}) {
  const data = getProducts().ProductsDetails;
  get_imageUrl = (item) => {
    var { ListImagePath } = item;
    var imageUrl;
    var image_end_url;
    for (let i = 1; i < item.Images.length; i++) {
      image_end_url = getProducts().ProductsDetails[0].Images.split("|", i);
    }
    imageUrl = ListImagePath + image_end_url;
    imageurl = imageUrl;
  };

  const renderItem = (item) => {
    var baseurl = item.item.ListImagePath;
    var Images;
    Images = item.item.Images.split("|");

    return (
      <Card
        Collection={item.item.Collection}
        Price={item.item.Price}
        ProductTitle={item.item.ProductTitle}
        baseurl={item.item.ListImagePath}
        baseurl={baseurl}
        images={Images}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.ProductId}
        renderItem={(item) => renderItem(item)}
        numColumns={2}
        progressViewOffset={10}
      />
    </View>
  );
}
