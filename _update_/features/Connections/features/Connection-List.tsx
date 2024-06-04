import data from "@/__test__/data/Connections.json";
import AnimatedHeader from "@/components/AnimatedHeader";
import SearchInput from "@/components/SearchInput";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import useSearch from "@/hooks/useSearch";
import React, { useState } from "react";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import ConnectionListHeader from "../components/Connection-List/Connection-Tab";
import { FilterOptions } from "../types/enums";
import { filterData } from "../utils/connectionFilter";

const HEADER_HEIGHT = 70;

const ConnectionList = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(FilterOptions.All);
  const categoryData = filterData(data, filter);

  const searchableData = useSearch(
    categoryData,
    searchTerm,
    (item) => item.name
  );
  const scrollY = new Animated.Value(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };
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
        renderItem={({ item }) => (
          <ThemedText>
            {filter === FilterOptions.Group ? item.title : item.name}
          </ThemedText>
        )}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT,
          backgroundColor: "red",
        }}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
      />
    </>
  );
};

export default ConnectionList;
