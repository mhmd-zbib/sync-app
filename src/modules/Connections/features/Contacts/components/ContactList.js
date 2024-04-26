import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ContactItem from "./ContactItem";
import { useNavigation } from "@react-navigation/native";

const ContactList = ({ contacts }) => {
  const navigation = useNavigation();
  const navigateToProfile = (id) => {
    navigation.navigate("ContactDetails", { userId: id });
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
