import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EmojiCategory from "./EmojiCategory";
import tabs from "../../../../data/emoji/categories";
import { useTheme } from "../../../stores/themeStore";

const EmojiSelector = ({ setEmoji }) => {
  const [activeCategory, setActiveCategory] = useState(tabs.tabs[0].category);
  const theme = useTheme();

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderBottomWidth: 2,
          borderColor: theme.accent,
        }}>
        {tabs.tabs.map((tab, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() => setActiveCategory(tab.category)}
            style={{ padding: 10 }}>
            <Text style={{ fontSize: 20 }}>{tab.tabLabel}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <EmojiCategory setEmoji={setEmoji} category={activeCategory} />
    </>
  );
};

export default EmojiSelector;
