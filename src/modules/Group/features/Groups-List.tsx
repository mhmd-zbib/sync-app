import data from "@/__test__/data/Groups.json";
import React from "react";
import { FlatList } from "react-native";
import GroupsItem from "./Groups-Item";

const GroupsList = () => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => <GroupsItem group={item} />}
      contentContainerStyle={{ gap: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
};

export default GroupsList;
