import React from "react";
import { View, ViewStyle } from "react-native";
import ThemedText from "./ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { AntDesign } from "@expo/vector-icons";

interface AvatarProps {
  name: string;
  size?: number;
  star?: boolean;
}

const Avatar = ({ name, size = 56, star }: AvatarProps) => {
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
      <ThemedText size={size / 3}>{initials.toUpperCase()}</ThemedText>
      {star && (
        <View
          style={{
            position: "absolute",
            zIndex: 800,
            right: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <AntDesign
            name="star"
            size={18}
            color={"#ffcd17"}
            style={{ position: "absolute" }}
          />
          <AntDesign name="staro" size={20} color={"white"} />
        </View>
      )}
    </View>
  );
};

export default Avatar;
