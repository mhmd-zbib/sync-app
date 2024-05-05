import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Typography from "../../../../../shared/components/ui/Typography";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";
import { useTheme } from "../../../../../shared/stores/themeStore";

const ContactSelectItem = ({ contact, onPress }) => {
  const [selected, setSelected] = useState(false);
  const theme = useTheme();

  const toggleSelect = () => {
    onPress();
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: theme.accent,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        // gap: 10,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
          alignItems: "center",
        }}>
        <ProfilePicture name={contact.name} />
        <Typography>{contact.name}</Typography>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  checkbox: {
    marginRight: 10,
  },
});

export default ContactSelectItem;
