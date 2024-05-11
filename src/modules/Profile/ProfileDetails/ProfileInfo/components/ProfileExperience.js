import { View, Text, FlatList } from "react-native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../shared/stores/themeStore";
import DateTimeFormatter from "../../../../../shared/hooks/useFormatDate";

const ExperienceItem = ({ item }) => {
  const theme = useTheme();
  return (
    <View style={{ gap: 8 }}>
      <Typography variant="lg">{item.title}</Typography>
      <Typography variant="al" color={theme.textAccent}>
        {item.company}
        {"   •   "} {DateTimeFormatter.formatMonthYear(item.startDate)}
        {"   •   "}
        {DateTimeFormatter.formatMonthYear(item.endDate)}
      </Typography>
      <Typography>{item.description}</Typography>
    </View>
  );
};

const ProfileExperience = ({ data }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => <ExperienceItem item={item} />}
    />
  );
};

export default ProfileExperience;
