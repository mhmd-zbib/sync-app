import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/ThemeStore";
import Typography from "../Text.js/Typography";
import { useGetInitials } from "../../hooks/useGetInitials";

const ProfilePicture = ({ name }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.accent,
        height: 48,
        width: 48,
        borderRadius: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Typography Typography>{useGetInitials(name)}</Typography>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({});
