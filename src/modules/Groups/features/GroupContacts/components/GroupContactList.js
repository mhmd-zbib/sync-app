import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import useSearch from "../../../../../shared/hooks/useSearch";
import useSort from "../../../../../shared/hooks/useSort";
import ContactItem from "../../../../Contacts/features/ContactList/components/ContactItem";
import { useGroupContactSelect } from "../hooks/useGroupContactSelect";

const GroupContactList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSelect, selected, selectMode, setSelectMode, handleLongPress } =
    useGroupContactSelect();

  const searchable = useSearch(data, searchTerm, "name");
  const sorted = useSort(searchable, "name");

  useEffect(() => {
    if (selected.length === 0 && selectMode) {
      setSelectMode(false);
    }
  }, [selected]);

  return (
    <FlatList
      ListHeaderComponent={
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      }
      style={{ padding: 10 }}
      contentContainerStyle={{ gap: 10 }}
      data={sorted}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ContactItem
          onPress={() => handleSelect(item.id)}
          item={item}
          selectMode={selectMode}
          onLongPress={() => {
            handleLongPress(item.id);
          }}
        />
      )}
    />
  );
};

export default GroupContactList;
