import data from "@/__test__/data/Contacts.json";
import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { filterData } from "../utils/connectionFilter";
import ConnectionTabItem from "./ConnectionTabItem";

interface Contact {
  id: number;
  name: string;
  isTagged: boolean;
  isStarred: boolean;
}

const ConnectionList = () => {
  const [filter, setFilter] = useState<"all" | "tagged" | "starred">("all");
  const buttonTitles = ["All", "Tagged", "Starred"];

  const filteredData = useMemo(() => filterData(data, filter), [data, filter]);

  const renderItem = ({ item }: { item: Contact }) => (
    <View style={{ backgroundColor: "white" }}>
      <Text>Name: {item.name}</Text>
    </View>
  );

  return (
    <View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {buttonTitles.map((title) => (
          <ConnectionTabItem
            key={title}
            title={title}
            onPress={() =>
              setFilter(title.toLowerCase() as "all" | "tagged" | "starred")
            }
            isActiveTab={filter === title.toLowerCase()}
          />
        ))}
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ConnectionList;
