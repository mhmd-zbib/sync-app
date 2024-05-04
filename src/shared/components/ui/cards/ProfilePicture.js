import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../stores/themeStore";
import Typography from "../Typography";
import { useGetInitials } from "../../../hooks/useGetInitials";
import { Feather } from "@expo/vector-icons";
import shortnameToUnicode from "../../../utils/shortnameToUnicode";

const ProfilePicture = ({ name, size = "md", onPress, emoji, color }) => {
  const theme = useTheme();
  const sizeStyle = sizes[size] || sizes.medium;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        borderColor: color ? null : theme.textAccent,
        borderWidth: 1,
        backgroundColor: color ? color : theme.accent,
        height: sizeStyle.height,
        width: sizeStyle.width,
        borderRadius: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {name ? (
        <Typography style={{ fontSize: sizeStyle.fontSize }}>
          {useGetInitials(name)}
        </Typography>
      ) : emoji ? (
        <Typography style={{ fontSize: sizeStyle.fontSize }}>
          {shortnameToUnicode[`:${emoji}:`]}
        </Typography>
      ) : (
        <Feather name="edit" size={24} color={theme.textSecondary} />
      )}
    </TouchableOpacity>
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
    height: 80,
    width: 80,
    fontSize: 24,
  },
  xlg: {
    borderRadius: 500,
    height: 170,
    width: 170,
    fontSize: 60,
  },
};
