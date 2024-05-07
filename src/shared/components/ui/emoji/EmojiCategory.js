import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { memo } from "react";
import { View } from "react-native";
import { emojisByCategory } from "../../../../data/emoji/emojis";
import { useTheme } from "../../../stores/themeStore";
import SearchBar from "../SearchBar";
import Emoji from "./Emoji";

const ListSearchBar = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: theme.secondary,
        paddingVertical: 10,
      }}>
      <SearchBar />
    </View>
  );
};

const EmojiCategory = ({ category, setEmoji }) => {
  const press = (item) => {
    console.log(item);
    setEmoji(item);
  };

  return (
    <BottomSheetFlatList
      stickyHeaderHiddenOnScroll
      // stickyHeaderIndices={[0]}
      // ListHeaderComponentStyle={{
      //   flexDirection: "row",
      // }}
      // ListHeaderComponent={ListSearchBar}
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
