import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../../components/ui/SearchBar";
import TagsList from "../../features/tags/TagsList";
import useListTagsNavigation from "../../queries/tags/useListTagsNavigation";
import { useTagSearchStore } from "../../stores/tags/useTagSearchStore";

const ListTagsPage = () => {
  const setSearchTerm = useTagSearchStore((state) => state.setSearchTerm);
  const navigation = useListTagsNavigation();

  return (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 24,
        paddingHorizontal: 10,
        gap: 25,
      }}>
      <SearchBar placeHolder="Search tags" setSearchTerm={setSearchTerm} />
      <TagsList />
    </View>
  );
};

export default ListTagsPage;

const styles = StyleSheet.create({});
