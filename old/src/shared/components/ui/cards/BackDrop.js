import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

const BackDrop = ({ visible, onPress }) => {
  if (!visible) return null;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.backdrop} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

export default BackDrop;
