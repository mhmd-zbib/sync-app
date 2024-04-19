import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ContactInfoCont from "./ContactInfoCont";
import Typography from "../../../ui/text/Typography";
import { useTheme } from "../../../../stores/shared/themeStore";

const TagsButton = ({ item, color, border, text }) => {
  const theme = useTheme(color);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: color, borderColor: border }]}>
      <Typography variant="sm" color={text}>
        {item}
      </Typography>
    </TouchableOpacity>
  );
};

const ContactTags = () => {
  const theme = useTheme();

  const tags = [
    { title: "Developer", color: "red" },
    { title: "Marketing", color: "blue" },
    { title: "Scientist", color: "green" },
    { title: "Scientist", color: "green" },
  ];

  return (
    <ContactInfoCont label={"Tags"} style={styles.container}>
      {tags.map((tag, index) => (
        <TagsButton
          key={index}
          item={tag.title}
          color={theme.accent}
          border={theme.secondary}
        />
      ))}
      <TagsButton
        item="+ Add new tag"
        text={theme.textSecondary}
        color={theme.secondary}
        border={theme.accent}
      />
    </ContactInfoCont>
  );
};

export default ContactTags;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    borderWidth: 1,
    borderColor: "transparent", // Hide border
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    margin: 5, // Add margin for spacing between tags
  },
});
