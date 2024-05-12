import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../../../../../shared/stores/themeStore";
import Typography from "../../../../../../shared/components/ui/Typography";
import DateTimeFormatter from "../../../../../../shared/hooks/useFormatDate";

const ProfileExperienceItem = ({ item }) => {
  const theme = useTheme();
  return (
    <>
      <View style={{ gap: 4 }}>
        <Typography variant="lg">{item.title}</Typography>
        <Typography variant="al" color={theme.textAccent}>
          {item.company}
          {"   •   "}
          {DateTimeFormatter.formatMonthYear(item.startDate)}
          {"   •   "}
          {DateTimeFormatter.formatMonthYear(item.endDate)}
        </Typography>
        <Typography>{item.description}</Typography>
      </View>
    </>
  );
};

export default ProfileExperienceItem;
