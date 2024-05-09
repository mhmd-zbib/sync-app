import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";
import { useTheme } from "../../../../../shared/stores/themeStore";
import ItemCard from "../../../../../shared/components/ui/cards/ItemCard";

const GroupItem = ({ onPress, item, selectMode, selected, onLongPress }) => {
  const theme = useTheme();
  return (
    <ItemCard
      onLongPress={onLongPress}
      onPress={onPress}
      name={item.name}
      emoji={item.emoji}
      backgroundColor={item.background_color}
      rightInfo={item.count}
      selectMode={selectMode}
      selected={selected}
    />
  );
};

export default GroupItem;
