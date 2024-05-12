import { View, Text, FlatList } from "react-native";
import React from "react";
import Typography from "../../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../../shared/stores/themeStore";
import DateTimeFormatter from "../../../../../../shared/hooks/useFormatDate";
import Separator from "../../../../../../shared/components/ui/Separator";
import ProfileExperienceItem from "./ProfileExperienceItem";

const ProfileExperience = ({ data }) => {
  if (!data) return <Typography>Tap to add</Typography>;

  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item, index }) => (
        <ProfileExperienceItem item={item} index={index} />
      )}
      ItemSeparatorComponent={<Separator style={{ marginVertical: 15 }} />}
    />
  );
};

export default ProfileExperience;
