/**
 *  Connections List item for <contacts></contacts>
 *  Filters the contacts upon the type in the Enum ( all, starred, tagged)
 *  the header is elastic for better UX
 *
 */

import data from "@/__test__/data/Contacts.json";
import AnimatedHeader from "@/components/AnimatedHeader";
import SearchInput from "@/components/SearchInput";
import { useTheme } from "@/hooks/useColorScheme";
import useSearch from "@/hooks/useSearch";
import React, { useMemo, useState } from "react";
import { Animated, FlatList, View } from "react-native";
import { FilterOptions } from "../../types/enums";
import { filterData } from "../../utils/connectionFilter";
import ConnectionListItem from "./Connection-List-Item";
import ConnectionListHeader from "./Connection-Tab";
import { router } from "expo-router";
import { getReactNavigationScreensConfig } from "expo-router/build/getReactNavigationConfig";

const HEADER_HEIGHT = 70;

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

  const scrollY = new Animated.Value(0);

  return (
    <>
      <AnimatedHeader scrollY={scrollY} headerHeight={HEADER_HEIGHT}>
        <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      </AnimatedHeader>

      <FlatList
        bounces={false}
        overScrollMode="never"
        ListHeaderComponent={
          <ConnectionListHeader filter={filter} setFilter={setFilter} />
        }
        stickyHeaderHiddenOnScroll
        ListHeaderComponentStyle={{
          backgroundColor: theme.background,
          paddingBottom: 10,
        }}
        data={searchableData}
        renderItem={({ item }) => <ConnectionListItem contact={item} />}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        keyExtractor={(item) => item.id.toString()}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
    </>
  );
};

export default ConnectionList;
