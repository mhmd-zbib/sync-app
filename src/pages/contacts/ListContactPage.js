import React, { useState } from "react";
import { Text, View } from "react-native";
import SectionPicker from "../../components/app/SectionPicker";
import ContactsList from "../../components/app/contacts/ContactsList";
import GroupList from "../../components/app/groups/GroupList";
import SearchBar from "../../components/ui/SearchBar";
import { useConnectionsSearchStore } from "../../stores/contacts/useConnectionsSearchStore";
import FloatingAdd from "../../components/ui/buttons/FloatingAdd";

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
    <View
      style={{
        flex: 1,
        gap: 24,
      }}>
      <SearchBar
        placeHolder="Search people"
        setSearchTerm={setSearchTerm}
        containerStyle={{ marginHorizontal: 10 }}
      />
      <SectionPicker onChangeContent={setContent} activeContent={content} />
      <ContentDisplay content={content} />
    </View>
  );
};

export default ContactsScreen;
