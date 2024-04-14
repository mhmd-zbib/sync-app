import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ContactsList from "./components/contacts/ContactsList";
import SearchBar from "../../components/ui/SearchBar";
import SectionPicker from "./components/SectionPicker";
import GroupList from "./components/groups/GroupList";
import { useConnectionsSearchStore } from "./store/useConnectionsSearchStore";

const CONTACTS = 0;
const GROUPS = 1;
const DEFAULT_TEXT = "Default Content";

const ContentDisplay = ({ content }) => {
  switch (content) {
    case CONTACTS:
      return <ContactsList />;
    case GROUPS:
      return <GroupList />;
    default:
      return <Text>{DEFAULT_TEXT}</Text>;
  }
};

const ContactsScreen = () => {
  const [content, setContent] = useState(CONTACTS);
  const setSearchTerm = useConnectionsSearchStore(
    (state) => state.setSearchTerm
  );

  return (
    <View>
      <SearchBar
        containerStyle={styles.searchBar}
        placeholder="Search people"
        setSearchTerm={setSearchTerm}
      />
      <SectionPicker onChangeContent={setContent} activeContent={content} />
      <ContentDisplay content={content} />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 16,
  },
});
