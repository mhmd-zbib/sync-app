import React, { useState } from "react";
import { FlatList } from "react-native";
import EmptyList from "../../../../../shared/components/layout/EmptyList";
import Card from "../../../../../shared/components/ui/cards/Card";
import ProfileExperienceItem from "../../../../Profile/features/ProfileDetails/ProfileInfo/components/ProfileExperienceItem";
import Typography from "../../../../../shared/components/ui/Typography";

const ExperienceList = ({ data }) => {
  const [selectMode, setSelectMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  console.log(data);

  return (
    <FlatList
      ListEmptyComponent={<EmptyList title={"experience"} />}
      contentContainerStyle={{
        gap: 10,
        paddingHorizontal: 10,
        flex: !data ? 0 : 1,
      }}
      renderItem={({ item }) => (
        <Card>
          <ProfileExperienceItem item={item} onLongPress />
        </Card>
      )}
      data={data}
    />
  );
};

export default ExperienceList;
