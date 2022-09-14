import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={{ marginTop: "100px" }}>
      <View>
        <HeaderTabs />
      </View> 
    </SafeAreaView>
  );
}
