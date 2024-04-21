import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ContactInfoCont from "./ContactInfoCont";
import Typography from "../../../ui/text/Typography";
import { useTheme } from "../../../../stores/shared/themeStore";
import { useNavigation } from "@react-navigation/native";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";

const TagsButton = ({ item, color, border, text, onPress }) => {
  const theme = useTheme(color);

  return (
    <TouchableOpacity
      onPress={onPress}
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
  const navigation = useNavigation();

  const contactDetails = useContactDetailsStore(
    (state) => state.contactDetails
  );

  console.log(contactDetails, " j");

  const tags = [];

  return (
    <ContactInfoCont label={"Tags"} style={styles.container}>
      {tags.length > 0
        ? tags.map((tag, index) => (
            <TagsButton
              key={index}
              item={tag.title}
              color={theme.accent}
              border={theme.secondary}
            />
          ))
        : null}
      <TagsButton
        onPress={() => {
          navigation.navigate("Tags");
        }}
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
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    margin: 5, // Add margin for spacing between tags
  },
});
