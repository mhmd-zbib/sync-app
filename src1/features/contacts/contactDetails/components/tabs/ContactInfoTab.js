import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactDescription from "../../infoComponents/ContactDescription";
import ContactTagsList from "../../infoComponents/ContactTagsList";
import ContactConnections from "../../infoComponents/ContactConnections";
import ContactExperience from "../../infoComponents/ContactExperience";

const ContactInfoTab = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ContactDescription />
      {/* <ContactTagsList />
      <ContactConnections />
      <ContactExperience /> */}
    </ScrollView>
  );
};

export default ContactInfoTab;
