import React, { memo } from "react";
import { FlatList } from "react-native";
import { emojisByCategory } from "../../../../data/emoji/emojis";
import Emoji from "./Emoji";

const EmojiCategory = ({ category }) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      data={emojisByCategory[category]}
      renderItem={({ item }) => <Emoji item={item} />}
      keyExtractor={(item) => item}
      numColumns={8}
    />
  );
};

export default memo(EmojiCategory);
