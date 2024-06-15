import data from "@/__test__/data/Connections.json";
import AnimatedHeader from "@/components/AnimatedHeader";
import SearchInput from "@/components/SearchInput";
import useSearch from "@/hooks/useSearch";
import { formatShortDate } from "@/utils/format-date";
import React, { useState } from "react";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import ConnectionListHeader from "../components/Connection-Tab";
import ContactListItem from "../components/Contact-Item";
import GroupListItem from "../components/Group-Item";
import { FilterOptions } from "../types/enums";
import { Connections, Contact, Group } from "../types/interfaces";
import { filterData } from "../utils/connectionFilter";

const HEADER_HEIGHT = 70;
const ConnectionList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(FilterOptions.All);
  const categoryData = filterData(data, filter);
  const searchableData: Connections[] = useSearch(
    categoryData,
    searchTerm,
    (item) =>
      item.name?.toLowerCase() +
      item.tag?.name?.toLowerCase() +
      formatShortDate(item.createdAt).toLowerCase()
  );
  const scrollY = new Animated.Value(0);
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  const pinned = searchableData.filter((contact) => contact.isPinned);
  const unPinned = searchableData.filter((contact) => !contact.isPinned);

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
        data={[...pinned, ...unPinned]}
        renderItem={({ item }) => {
          switch (filter) {
            case FilterOptions.Group:
              return <GroupListItem group={item as Group} />;
            default:
              return <ContactListItem contact={item as Contact} />;
          }
        }}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT,
          gap: 10,
        }}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
      />
    </>
  );
};

export default ConnectionList;
