import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import shortnameToUnicode from "../../../utils/shortnameToUnicode";

const Emoji = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.emojiContainer}>
      <Text style={styles.emoji}>{shortnameToUnicode[`:${item}:`]}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emojiContainer: {
    marginHorizontal: 9,
  },
  emoji: {
    fontSize: 25,
  },
});

export default Emoji;
