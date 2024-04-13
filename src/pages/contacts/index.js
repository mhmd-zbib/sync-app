import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactsList from "./components/ContactsList";
import SearchBar from "../../components/ui/SearchBar";

const ContactsScreen = () => {
  return (
    <View>
      <SearchBar />
      <ContactsList />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
