import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ContactsList from "./components/contacts/ContactsList";
import SearchBar from "../../components/ui/SearchBar";
import SectionPicker from "./components/SectionPicker";

const ContactsScreen = () => {
  const [content, setContent] = useState(0);

  const handleChangeContent = (type) => {
    setContent(type);
  };

  return (
    <View>
      <SearchBar
        containerStyle={{ marginBottom: 16 }}
        placeHolder="Search people"
      />
      <SectionPicker onChangeContent={handleChangeContent} content={content} />
      <ContactsList />
    </View>
  );
};

export default ContactsScreen;
