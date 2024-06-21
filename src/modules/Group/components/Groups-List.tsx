import ThemedText from "@/components/ThemedText";
import { Group } from "@/modules/Connections/types/interfaces";
import React from "react";
import { FlatList } from "react-native";
import GroupsItem from "./Groups-Item";

interface GroupList {
  data: Group[];
}

const GroupsList = ({ data }: GroupList) => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => <GroupsItem group={item} />}
      contentContainerStyle={{ gap: 10, flex: 1, alignContent: "center" }}
      columnWrapperStyle={{ gap: 10 }}
      ListEmptyComponent={<ThemedText>nothing here</ThemedText>}
    />
  );
};

export default GroupsList;
