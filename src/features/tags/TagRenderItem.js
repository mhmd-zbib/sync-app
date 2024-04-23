import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../ui/text/Typography";
import PrimaryCard from "../../ui/cards/PrimaryCard";

const TagRenderItem = ({ item, onSelect, isSelected }) => {
  return (
    <PrimaryCard
      onPress={() => onSelect(item)}
      style={[styles.card, isSelected ? styles.selected : null]}>
      <Typography>{item.name}</Typography>
    </PrimaryCard>
  );
};

export default TagRenderItem;

const styles = StyleSheet.create({
  selected: {
    backgroundColor: "#DDEEFF",
  },
});
