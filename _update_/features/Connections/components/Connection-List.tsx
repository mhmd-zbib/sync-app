/**
 *  Connections List item for <contacts></contacts>
 *  Filters the contacts upon the type in the Enum ( all, starred, tagged)
 *  the header is elastic for better UX
 *
 */

import data from "@/__test__/data/Contacts.json";
import SearchInput from "@/components/SearchInput";
import { useTheme } from "@/hooks/useColorScheme";
import React, { useMemo, useState } from "react";
import { FlatList, Platform, View } from "react-native";
import { FilterOptions } from "../types/enums";
import { filterData } from "../utils/connectionFilter";
import ConnectionListItem from "./Connection-List-Item";
import ConnectionListHeader from "./Connection-Tab";
import useSearch from "@/hooks/useSearch";
import ThemedText from "@/components/ThemedText";

const ConnectionList = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterOptions>(FilterOptions.All);
  const categoryData = useMemo(() => filterData(data, filter), [data, filter]);
  const searchableData = useSearch(
    categoryData,
    searchTerm,
    (item) => item.name
  );

  return (
    <View style={{ gap: 10 }}>
      <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      <FlatList
        ListHeaderComponent={
          <ConnectionListHeader filter={filter} setFilter={setFilter} />
        }
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        ListHeaderComponentStyle={{
          backgroundColor: theme.background,
          paddingBottom: 10,
        }}
        data={searchableData}
        renderItem={({ item }) => (
          <ConnectionListItem
            onPress={() => {
              console.log("hi");
            }}
            contact={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ConnectionList;
