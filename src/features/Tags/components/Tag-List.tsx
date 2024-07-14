import data from "@/__test__/data/Tags.json";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";
import { FlatList } from "react-native";

const TagList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ThemedText>{item.name}</ThemedText>}
    />
  );
};

export default TagList;
