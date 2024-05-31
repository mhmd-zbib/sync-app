import React from "react";
import { View, ViewStyle } from "react-native";
import ThemedText from "./ThemedText";
import { useTheme } from "@/hooks/useColorScheme";

interface AvatarProps {
  name: string;
  size?: number;
}

const Avatar = ({ name, size = 50 }: AvatarProps) => {
  const theme = useTheme();

  const words = name.split(" ");

  const initials =
    words.length >= 2
      ? `${words[0].charAt(0)}${words[1].charAt(0)}`
      : words.length === 1
      ? words[0].charAt(0)
      : "";

  const styles: { [key: string]: ViewStyle } = {
    container: {
      backgroundColor: theme.accent,
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <View style={styles.container}>
      <ThemedText>{initials.toUpperCase()}</ThemedText>
    </View>
  );
};

export default Avatar;
