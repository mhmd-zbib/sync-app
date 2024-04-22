import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactDescription from "./description/ContactDescription";
import ContactTagsList from "./tags/ContactTagsList";

const ContactInfoMain = () => {
  return (
    <View>
      <ContactDescription />
      <ContactTagsList />
    </View>
  );
};

export default ContactInfoMain;

const styles = StyleSheet.create({});
