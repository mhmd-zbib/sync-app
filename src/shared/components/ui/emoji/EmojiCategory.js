import React, { memo } from "react";
import { FlatList } from "react-native";
import { emojisByCategory } from "../../../../data/emoji/emojis";
import Emoji from "./Emoji";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const EmojiCategory = ({ category, setEmoji }) => {
  const press = (item) => {
    console.log(item);
    setEmoji(item);
  };

  return (
    <BottomSheetFlatList
      horizontal={false}
      contentContainerStyle={{
        alignItems: "center",

        padding: 10,
      }}
      data={emojisByCategory[category]}
      renderItem={({ item }) => (
        <Emoji
          onPress={() => {
            press(item);
          }}
          item={item}
          onp
        />
      )}
      keyExtractor={(item) => item}
      numColumns={8}
    />
  );
};

export default memo(EmojiCategory);
