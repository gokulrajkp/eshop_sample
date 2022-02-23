import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import getProducts from "../data/ProductData";
import Card from "../components/Card";

export default function Products({}) {
  const [loadMore, setLoadMore] = useState(10);
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const loadData = () => {
    setLoadMore(loadMore + 12);
    getData();
  };
  const getData = () => {
    const data = getProducts().ProductsDetails;
    setProductList(data.slice(0, loadMore));
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
        baseurl={baseurl}
        images={Images}
      />
    );
  };

  return (
    <View style={styles.container}>
      {productList !== null ? (
        <FlatList
          data={productList}
          keyExtractor={(item) => item.ProductId}
          renderItem={(item) => renderItem(item)}
          numColumns={2}
          onEndReachedThreshold={0.5}
          onEndReached={() => loadData()}
        />
      ) : (
        <View style={styles.indicatorView}>
          <ActivityIndicator color={"blue"} size={40} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
