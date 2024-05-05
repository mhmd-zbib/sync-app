import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactSelectList from "./components/ContactSelectList";
import useGetContacts from "../ContactList/hooks/useGetContacts";
import Loading from "../../../../shared/components/layout/Loading";

const ContactSelectScreen = ({ isBottomSheet }) => {
  const { data: contacts, isLoading, isError, error } = useGetContacts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContactSelectList isBottomSheet={isBottomSheet} contacts={contacts} />
  );
};

export default ContactSelectScreen;

const styles = StyleSheet.create({});
