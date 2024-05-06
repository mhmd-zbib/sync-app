import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Typography from "../../../../../shared/components/ui/Typography";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";
import { useTheme } from "../../../../../shared/stores/themeStore";

const ContactSelectItem = ({ contact, onPress, isSelected }) => {
  const theme = useTheme();

  const icon = isSelected
    ? "checkbox-marked-circle"
    : "checkbox-blank-circle-outline";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(contact.id)}
      style={styles.container}>
      <View style={styles.infoContainer}>
        <ProfilePicture name={contact.name} />
        <Typography>{contact.name}</Typography>
      </View>
      <MaterialCommunityIcons
        name={icon}
        size={26}
        color={isSelected ? theme.primary : theme.secondary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "transparent",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
});

export default ContactSelectItem;
