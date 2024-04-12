import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactsList from "./components/ContactsList";

const ContactsScreen = () => {
  return (
    <View>
      <ContactsList />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
