import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import EmojiCategory from "../../../../../shared/components/ui/emoji/EmojiCategory";
import EmojiPicker from "../../../../../shared/components/ui/emoji/EmojiPicker";

const COLORS = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  pink: "#ff00ff",
  orange: "#ffa500",
  purple: "#800080",
  cyan: "#00ffff",
};

const GroupProfileBottomSheet = () => {
  const [emoji, setEmoji] = useState("👍"); // Default emoji
  const [backgroundColor, setBackgroundColor] = useState(COLORS.red);
  const handleInputChange = (text) => {
    if (text.length <= 2) {
      setEmoji(text);
    }
  };

  const colorChunks = Object.values(COLORS).reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor,
          },
        ]}>
        <TextInput
          cursorColor={"transparent"}
          style={styles.textInput}
          onChangeText={handleInputChange}
          value={emoji}
        />
      </View>

      <EmojiCategory category={"people"} />

      <View>
        {colorChunks.map((chunk, i) => (
          <View style={styles.colorContainer} key={i}>
            {chunk.map((color, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                onPress={() => setBackgroundColor(color)}
                style={[styles.colorButton, { backgroundColor: color }]}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
    height: "100%",
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 50,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  colorButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default GroupProfileBottomSheet;
