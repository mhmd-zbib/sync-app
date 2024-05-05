import React from "react";
import { StyleSheet, TouchableOpacity, FlatList } from "react-native";

const ColorButton = ({ color, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => onPress(color)}
    style={[styles.colorButton, { backgroundColor: color }]}
  />
);

const ColorPicker = ({ colors, onColorSelect, columns = 4, style }) => {
  const renderItem = ({ item }) => (
    <ColorButton color={item} onPress={onColorSelect} />
  );

  return (
    <FlatList
      data={Object.values(colors)}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
      numColumns={columns}
      style={[styles.list, style]}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  listContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  colorButton: {
    width: 70,
    height: 70,
    borderRadius: 800,
    margin: 10,
  },
});
