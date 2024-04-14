import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/ThemeStore";
import Typography from "../Text.js/Typography";
import { useGetInitials } from "../../hooks/useGetInitials";

const ProfilePicture = ({ name, size = "md" }) => {
  const theme = useTheme();
  const sizeStyle = sizes[size] || sizes.medium;

  return (
    <View
      style={{
        backgroundColor: theme.accent,
        height: sizeStyle.height,
        width: sizeStyle.width,
        borderRadius: sizeStyle.width / 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Typography style={{ fontSize: sizeStyle.fontSize }}>
        {useGetInitials(name)}
      </Typography>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({});

const sizes = {
  sm: {
    height: 32,
    width: 32,
    fontSize: 12,
  },
  md: {
    height: 48,
    width: 48,
    fontSize: 18,
  },
  lg: {
    height: 72,
    width: 72,
    fontSize: 24,
  },
};
