import React from "react";
import { View } from "react-native";
import Emoji from "react-native-emoji";
import Avatar from "./Avatar";

interface GroupAvatarProps {
  emoji: string;
  color: string;
  size?: number;
}

const GroupAvatar = ({ emoji, color, size = 35 }: GroupAvatarProps) => {
  if (!emoji || !color) return <Avatar name="G R" />;

  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 500,
        height: size,
        width: size,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Emoji name={emoji} style={{ fontSize: size / 2.2 }} />
    </View>
  );
};
export default GroupAvatar;
