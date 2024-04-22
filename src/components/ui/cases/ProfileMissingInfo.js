import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../text/Typography";

const ProfileMissingInfo = ({ onPress, message }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.centerContent}>
      <Typography style={{ color: theme.textSecondary }}>{message}</Typography>
    </TouchableOpacity>
  );
};

export default ProfileMissingInfo;

const styles = StyleSheet.create({
  centerContent: {
    alignItems: "center",
    marginVertical: 10,
  },
});
