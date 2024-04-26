import React from "react";
import { StyleSheet, View } from "react-native";
import PrimaryCard from "../../../../../shared/components/ui/cards/PrimaryCard";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";
import { useTheme } from "../../../../../shared/stores/themeStore";
import DateTimeFormatter from "../../../../../shared/hooks/useFormatDate";
import Typography from "../../../../../shared/components/ui/Typography";
const ContactItem = ({ onPress, item }) => {
  const theme = useTheme();
  return (
    <PrimaryCard onPress={onPress}>
      <Typography>
        {item.id} {item.name}
      </Typography>
      {/* <View
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
      </View> */}
    </PrimaryCard>
  );
};

export default ContactItem;

const styles = StyleSheet.create({});
