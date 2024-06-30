import { colorToRGBA } from "@/helpers/toRGB";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TagColors } from "../../Contact/types/enums";

interface TagItemType {
  tag: TagsType;
}

interface TagColorsIndex {
  [key: string]: string;
}
const TagListItem: React.FC<TagItemType> = ({ tag }) => {
  const tagColor = TagColors[tag.color as keyof typeof TagColors] || "#CCCCCC";
  const containerStyle = {
    ...styles.container,
    backgroundColor: colorToRGBA(tagColor, 0.07),
    borderColor: colorToRGBA(tagColor, 0.3),
  };
  const textStyle = { color: colorToRGBA(tagColor, 1) };

  return (
    <View style={containerStyle}>
      <Text style={[textStyle, { fontSize: 13 }]}>{tag.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TagListItem;
