import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Feedback() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState(false);

  const handleNumber = (value) => {
    isNaN(value) && setError(true);
    setNumber(value);
    if (value.length !== 10) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const StoreData = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("number", number);
      await AsyncStorage.setItem("feedback", feedback);
    } catch (error) {
      console.log(error);
    }
  };

  const validate = () => {
    if ((name && email && number && feedback) == null) {
      Alert.alert("Alert", "Every Field is required! ");
    } else if (error) {
      Alert.alert("Alert", "Enter valid number");
    } else {
      StoreData();

      Alert.alert("Success", "Saved Succesfuly");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Name"
          maxLength={20}
          onChangeText={(value) => setName(value)}
        />
        <View style={styles.bottomBorder} />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
          maxLength={20}
        />
        <View style={styles.bottomBorder} />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={(value) => handleNumber(value)}
        />
        <View style={styles.bottomBorder} />
        {error && (
          <Text style={styles.error_text}>Number must contain 10 digits</Text>
        )}
      </View>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Feedback"
          multiline={true}
          maxLength={100}
          onChangeText={(value) => setFeedback(value)}
        />
        <View style={styles.bottomBorder} />
      </View>
      <TouchableOpacity style={styles.save_btn} onPress={() => validate()}>
        <Text style={styles.save_text}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputBox: {
    width: "95%",
    padding: 14,
    margin: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  bottomBorder: {
    height: 1,
    backgroundColor: "gray",
  },
  save_text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  save_btn: {
    backgroundColor: "#6464ff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 20,
    borderRadius: 8,
  },
  error_text: {
    color: "red",
  },
});
