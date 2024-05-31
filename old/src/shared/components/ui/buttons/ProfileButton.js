import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../../stores/themeStore";
import Typography from "../Typography";

const ProfileButton = ({ name, onPress, isButton = false }) => {
  const theme = useTheme();

  if (!name) {
    return;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        backgroundColor: isButton ? theme.primary : theme.secondary,
        borderWidth: 1,
        borderColor: theme.accent,
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 6,
        flexDirection: "column",
        alignSelf: "flex-start",
      }}>
      <Typography color={isButton && theme.background}>{name}</Typography>
    </TouchableOpacity>
  );
};

export default ProfileButton;
