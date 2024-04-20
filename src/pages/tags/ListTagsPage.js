import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TagsList from "../../components/app/tags/TagsList";
import SearchBar from "../../components/ui/SearchBar";
import Button from "../../components/ui/buttons/Button";
import { useTagSearchStore } from "../../stores/tags/useTagSearchStore";
import useContactNavigation from "../../hooks/contacts/useContactNavigation";
import useListTagsNavigation from "../../hooks/tags/useListTagsNavigation";

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
        gap: 20,
      }}>
      <View style={{ gap: 24, flex: 1 }}>
        <SearchBar placeHolder="Search tags" setSearchTerm={setSearchTerm} />
        <TagsList />
      </View>
      <Button title={"Save"} />
    </View>
  );
};

export default ListTagsPage;

const styles = StyleSheet.create({});
