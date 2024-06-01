import data from "@/__test__/data/Contacts.json";
import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { filterData } from "../utils/connectionFilter";
import ConnectionListHeader from "./ConnectionTab";
import { useTheme } from "@/hooks/useColorScheme";
import ConnectionListItem from "./ConnectionListItem";

interface Contact {
  id: number;
  name: string;
  isTagged: boolean;
  isStarred: boolean;
}

const ConnectionList = () => {
  const [filter, setFilter] = useState<"all" | "tagged" | "starred">("all");
  const filteredData = useMemo(() => filterData(data, filter), [data, filter]);
  const theme = useTheme();

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <ConnectionListHeader filter={filter} setFilter={setFilter} />
        }
        ListHeaderComponentStyle={{
          backgroundColor: theme.background,
          paddingBottom: 10,
        }}
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        data={filteredData}
        renderItem={({ item }) => <ConnectionListItem contact={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ConnectionList;
