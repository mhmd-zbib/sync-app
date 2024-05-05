// GroupItem.js

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import ItemCard from "../../../../../shared/components/ui/cards/ItemCard";

const GroupItem = ({ item, onPress }) => {
  return (
    <ItemCard onPress={onPress}>
      <Typography>{item.title}</Typography>
    </ItemCard>
  );
};

export default GroupItem;

const styles = StyleSheet.create({});
