import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import ExperienceItem from "./ExperienceItem";
import Card from "../../../../shared/components/ui/cards/Card";
import ProfileExperienceItem from "../../../Profile/features/ProfileDetails/ProfileInfo/components/ProfileExperienceItem";

const ExperienceList = ({ data }) => {
  const [selectMode, setSelectMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <FlatList
      contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
      renderItem={({ item }) => (
        <Card onLongPress={() => setSelectMode(true)}>
          <ProfileExperienceItem item={item} />
        </Card>
      )}
      data={data}
    />
  );
};

export default ExperienceList;
