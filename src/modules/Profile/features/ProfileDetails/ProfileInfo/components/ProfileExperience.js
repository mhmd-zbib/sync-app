import { View, Text, FlatList } from "react-native";
import React from "react";
import Typography from "../../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../../shared/stores/themeStore";
import DateTimeFormatter from "../../../../../../shared/hooks/useFormatDate";
import Separator from "../../../../../../shared/components/ui/Separator";

const ExperienceItem = ({ item, index }) => {
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

const ProfileExperience = ({ data }) => {
  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item, index }) => (
        <ExperienceItem item={item} index={index} />
      )}
      ItemSeparatorComponent={<Separator style={{ marginVertical: 15 }} />}
    />
  );
};

export default ProfileExperience;
