import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactDescription from "../info/ContactDescription";
import ContactTagsList from "../info/ContactTagsList";
import ContactConnections from "../info/ContactConnections";
import ContactExperience from "../info/ContactExperience";

const ContactInfoTab = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ContactDescription />
      <ContactTagsList />
      <ContactConnections />
      <ContactExperience />
    </ScrollView>
  );
};

export default ContactInfoTab;
