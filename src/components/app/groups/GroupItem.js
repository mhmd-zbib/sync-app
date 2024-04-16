import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../ui/text/Typography";

import PrimaryCard from "../../ui/cards/PrimaryCard";
import ProfilePicture from "../../ui/cards/ProfilePicture";
import { useTheme } from "../../../stores/themeStore";

const GroupItem = ({ item }) => {
  const theme = useTheme();

  return (
    <PrimaryCard style={{ flex: 1, flexDirection: "row", gap: 8 }}>
      <ProfilePicture name={item.name} />

      <View
        style={{
          justifyContent: "center",
        }}>
        <Typography>{item.name}</Typography>
        <Typography variant="sm" color={theme.textSecondary}>
          {item.members} connections
        </Typography>
      </View>
    </PrimaryCard>
  );
};

export default GroupItem;

const styles = StyleSheet.create({});
