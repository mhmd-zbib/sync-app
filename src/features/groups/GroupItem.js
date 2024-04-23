import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../components/ui/text/Typography";

import PrimaryCard from "../../components/ui/cards/PrimaryCard";
import ProfilePicture from "../../components/ui/cards/ProfilePicture";
import { useTheme } from "../../stores/shared/themeStore";

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
