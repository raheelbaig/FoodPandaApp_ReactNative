import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <View >
      <Headerbutton title="Delivery"/>
      <Headerbutton title="Pickup"/>
    </View>
  );
}

const Headerbutton = (props) => (
  <TouchableOpacity>
    <Text>{props.title}</Text>
  </TouchableOpacity>
);
