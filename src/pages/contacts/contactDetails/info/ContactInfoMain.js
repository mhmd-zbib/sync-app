import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactDescription from "./ContactDescription";
import ContactTagsList from "./ContactTagsList";
import ContactConnections from "./ContactConnections";
import ContactExperience from "./ContactExperience";

const ContactInfoMain = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ContactDescription />
      <ContactTagsList />
      <ContactConnections />
      <ContactExperience />
    </ScrollView>
  );
};

export default ContactInfoMain;

const styles = StyleSheet.create({});
