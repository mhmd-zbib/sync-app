import React, { memo } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import shortnameToUnicode from "../../../utils/shortnameToUnicode";
import Typography from "../Typography";

const Emoji = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.emojiContainer}>
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
