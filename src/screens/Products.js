import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  Modal,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import getProducts from "../data/ProductData";
import Card from "../components/Card";
import MaterialICon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Products({}) {
  const [loadMore, setLoadMore] = useState(10);
  const [productList, setProductList] = useState(null);
  const [visible, setVisible] = useState(false);

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
  const openFilter = () => {
    setVisible(true);
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
      <Modal visible={visible} transparent={true}>
        <View style={styles.modelView}>
          <View style={styles.modelTopview}>
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: "center", fontSize: 18 }}>Filter</Text>
            </View>
            <MaterialICon
              name="close"
              size={28}
              style={[styles.icons, { alignSelf: "flex-end" }]}
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.topbar}>
        <MaterialICon
          name="filter"
          size={28}
          style={styles.icons}
          onPress={() => openFilter()}
        />
        <MaterialICon
          name="sort"
          size={28}
          style={styles.icons}
          onPress={() => openFilter()}
        />
      </View>
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
  modelView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  modelTopview: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  topbar: {
    width: "100%",
    height: 60,
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    padding: 6,
  },
  indicatorView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
