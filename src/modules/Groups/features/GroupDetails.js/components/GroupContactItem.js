import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GroupContactItem = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default GroupContactItem;

const styles = StyleSheet.create({});
