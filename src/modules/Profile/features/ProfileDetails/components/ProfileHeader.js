import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";
import Typography from "../../../../../shared/components/ui/Typography";
import DateTimeFormatter from "../../../../../shared/hooks/useFormatDate";
import { useTheme } from "../../../../../shared/stores/themeStore";
import { useProfileQuery } from "../../../queries/useProfileQuery";

const ProfileHeader = () => {
  const { data } = useProfileQuery();

  const { name, birthday } = data;
  const theme = useTheme();

  return (
    <View style={{ flexDirection: "row", gap: 16, marginHorizontal: 10 }}>
      <ProfilePicture name={name} size="lg" />

      <View
        style={{ justifyContent: "center", gap: 10, flexDirection: "column" }}>
        <Typography variant="xlg" fontWeight={500}>
          {name}
        </Typography>
        <Typography
          variant="sm"
          color={birthday ? theme.textSecondary : theme.textAccent}
          style={{
            width: "auto",
            verticalAlign: "middle",
            alignSelf: "flex-start",
            backgroundColor: theme.secondary,
            padding: 3,
            paddingHorizontal: 10,
            borderColor: theme.accent,
            borderWidth: 1,
            textAlign: "center",
            borderRadius: 5,
          }}>
          {birthday
            ? DateTimeFormatter.formatFullDate(birthday)
            : "Add birthday"}
        </Typography>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
