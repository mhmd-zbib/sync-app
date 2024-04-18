import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../ui/text/Typography";
import PrimaryCard from "../../ui/cards/PrimaryCard";
import ProfilePicture from "../../ui/cards/ProfilePicture";
import { useTheme } from "../../../stores/shared/themeStore";

import DateTimeFormatter from "../../../hooks/useFormatDate";

const ContactItem = ({ onPress, item }) => {
  const theme = useTheme();
  return (
    <PrimaryCard onPress={onPress}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}>
        <ProfilePicture name={item.name} />
        <View style={{ flex: 1 }}>
          <Typography numberOfLines={1}>{item.name}</Typography>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            display: "flex",
            flexDirection: "row",
          }}>
          <Typography variant="sm" color={theme.textSecondary}>
            {DateTimeFormatter.formatFullDate(item.created_at)}
          </Typography>
        </View>
      </View>
    </PrimaryCard>
  );
};

export default ContactItem;

const styles = StyleSheet.create({});
