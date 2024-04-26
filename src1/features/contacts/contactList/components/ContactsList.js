import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Error from "../../../../components/layout/Error";
import Loading from "../../../../components/layout/Loading";
import EmptyList from "../../../../components/ui/EmptyList";
import useContactList from "../hooks/useContactList";
import { useContactListQuery } from "../queries/useContactsListQuery";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { data: contacts, isLoading, isError, error } = useContactListQuery();
  const sortedContacts = useContactList(contacts);
  const navigation = useNavigation();

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  if (contacts === 0 || contacts.length === 0)
    return <EmptyList title="connections" />;

  const navigateToProfile = (id) => {
    navigation.navigate("ContactDetails", { userId: id });
  };

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={sortedContacts}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <ContactItem onPress={() => navigateToProfile(item.id)} item={item} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  listContainer: { gap: 8, marginHorizontal: 10 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ContactsList;
