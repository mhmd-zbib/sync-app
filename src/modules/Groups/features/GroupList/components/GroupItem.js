import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import ItemCard from "../../../../../shared/components/ui/cards/ItemCard";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";

const GroupItem = ({ item, onPress }) => {
  return (
    <ItemCard onPress={onPress}>
      <ProfilePicture emoji={item.emoji} color={item.background_color} />
      <Typography>{item.name}</Typography>
      <Typography>{item.member_count}</Typography>
    </ItemCard>
  );
};

export default GroupItem;

const styles = StyleSheet.create({});
