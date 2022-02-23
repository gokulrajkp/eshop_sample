import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Products from "../screens/Products";
import Feedback from "../screens/Feedback";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ tabBarIcon: () => <MaterialIcon name="home" size={20} /> }}
        name="Products"
        component={Products}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <MaterialIcon name="feedback" size={20} />,
        }}
        name="FeedBack"
        component={Feedback}
      />
    </Tab.Navigator>
  );
}
