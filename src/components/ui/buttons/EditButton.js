import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../text/Typography";

const EditButton = ({ onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.editButton(theme)}>
      <Typography style={{ color: theme.textSecondary }} variant="sm">
        edit
      </Typography>
    </TouchableOpacity>
  );
};

export default EditButton;

const styles = StyleSheet.create({
  editButton: (theme) => ({
    backgroundColor: theme.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 500,
  }),
});
