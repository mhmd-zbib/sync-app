import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../../../components/Text.js/Typography";
import PrimaryCard from "../../../../components/cards/PrimaryCard";
import ProfilePicture from "../../../../components/cards/ProfilePicture";
import { useTheme } from "../../../../stores/ThemeStore";
import DateTimeFormatter, {
  useFormatFullDate,
} from "../../../../hooks/useFormatDate";

const ContactItem = ({ item }) => {
  const theme = useTheme();
  return (
    <PrimaryCard>
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
            {DateTimeFormatter.formatFullDate(item.date)}
          </Typography>
        </View>
      </View>
    </PrimaryCard>
  );
};

export default ContactItem;

const styles = StyleSheet.create({});
