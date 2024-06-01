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
import { FlatList, View } from "react-native";
import { FilterOptions } from "../types/enums";
import { filterData } from "../utils/connectionFilter";
import ConnectionListItem from "./Connection-List-Item";
import ConnectionListHeader from "./Connection-Tab";
import useSearch from "@/hooks/useSearch";

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
    <FlatList
      ListHeaderComponent={
        <View style={{ gap: 10 }}>
          <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
          <ConnectionListHeader filter={filter} setFilter={setFilter} />
        </View>
      }
      ListHeaderComponentStyle={{
        backgroundColor: theme.background,
        paddingBottom: 10,
      }}
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}
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
  );
};

export default ConnectionList;
