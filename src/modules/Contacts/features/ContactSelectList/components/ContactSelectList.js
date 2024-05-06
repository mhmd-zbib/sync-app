import React, { useState } from "react";
import { SectionList, View } from "react-native";
import EmptyList from "../../../../../shared/components/layout/EmptyList";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import Typography from "../../../../../shared/components/ui/Typography";
import useGroupedSections from "../../../../../shared/hooks/useGroupedSections";
import useSearch from "../../../../../shared/hooks/useSearch";
import useSort from "../../../../../shared/hooks/useSort";
import { useTheme } from "../../../../../shared/stores/themeStore";
import ContactSelectItem from "./ContactSelectItem";

const ContactSelectList = ({ contacts, selected, setSelected }) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const searchable = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort(searchable, "name");
  const sectioned = useGroupedSections(sortedContacts, (item) => item.name[0]);

  const toggleSelect = (id) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <View style={{ gap: 10 }}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <Typography
            color={theme.textSecondary}
            style={{
              backgroundColor: theme.secondary,
              borderRadius: 5,
              padding: 5,
              paddingHorizontal: 10,
            }}>
            {title}
          </Typography>
        )}
        stickyHeaderHiddenOnScroll={false}
        ListEmptyComponent={<EmptyList title={"contacts"} />}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        sections={sectioned}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => (
          <ContactSelectItem
            contact={item}
            onPress={toggleSelect}
            isSelected={selected.includes(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ContactSelectList;
