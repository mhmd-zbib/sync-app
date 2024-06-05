import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colorToRGBA } from "@/helpers/toRGB";
import { TagColors } from "../../types/enums";

interface TagItemType {
  tag: TagsType;
}

interface TagColorsIndex {
  [key: string]: string;
}
const ContactTagItem: React.FC<TagItemType> = ({ tag }) => {
  const tagColor = TagColors[tag.color as keyof typeof TagColors] || "#CCCCCC";
  const containerStyle = {
    ...styles.container,
    backgroundColor: colorToRGBA(tagColor, 0.15),
    borderColor: colorToRGBA(tagColor, 0.8),
  };
  const textStyle = { color: colorToRGBA(tagColor, 1) };

  return (
    <View style={containerStyle}>
      <Text style={[textStyle, { fontSize: 12 }]}>{tag.name}</Text>
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

export default ContactTagItem;
