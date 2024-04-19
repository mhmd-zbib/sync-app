import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactDescription from "./ContactDescription";
import ContactTags from "./ContactTags";
import ContactConnection from "./ContactConnection";

const ContactInfo = () => {
  return (
    <View>
      <ContactDescription />
      <ContactTags />
      <ContactConnection />
    </View>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({});
