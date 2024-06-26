import ThemedText from "@/components/ThemedText";
import { Group } from "@/modules/Connections/types/interfaces";
import React from "react";
import { FlatList, FlatListProps } from "react-native";
import GroupsItem from "./Groups-Item";

const GroupsList: React.FC<FlatListProps<Group>> = (props) => {
  return (
    <FlatList
      {...props}
      data={props.data}
      renderItem={({ item }) => <GroupsItem group={item} />}
      contentContainerStyle={{ gap: 10, flex: 1, alignContent: "center" }}
      ListEmptyComponent={<ThemedText>nothing here</ThemedText>}
      columnWrapperStyle={{ gap: 10 }}
      numColumns={2}
    />
  );
};

export default GroupsList;
