/**
 *  Flat list taking the passed param of contacts and returning a final render of the contacts,
 * no hooks but for the navigation function
 */

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, section = false }) => {
  const navigation = useNavigation();
  const navigateToProfile = (id) => {
    navigation.navigate("ContactProfileScreen", { id: id });
  };

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={contacts}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <ContactItem onPress={() => navigateToProfile(item.id)} item={item} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  listContainer: { gap: 8 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ContactList;
