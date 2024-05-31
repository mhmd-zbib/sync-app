import { View, Text, FlatList } from "react-native";
import React from "react";
import Typography from "../../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../../shared/stores/themeStore";
import DateTimeFormatter from "../../../../../../shared/hooks/useFormatDate";
import Separator from "../../../../../../shared/components/ui/Separator";
import ProfileExperienceItem from "./ProfileExperienceItem";
import useSort from "../../../../../../shared/hooks/useSort";

const ProfileExperience = ({ data }) => {
  if (!data) return <Typography>Tap to add</Typography>;

  const sortedData = useSort(data, "start_date", "des");

  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      data={sortedData}
      renderItem={({ item, index }) => (
        <ProfileExperienceItem item={item} index={index} />
      )}
      ItemSeparatorComponent={<Separator style={{ marginVertical: 15 }} />}
    />
  );
};

export default ProfileExperience;
