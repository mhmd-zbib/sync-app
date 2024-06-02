import ThemedText from "@/components/ThemedText";
import React from "react";
import { StyleSheet, View } from "react-native";
import ContactDescription from "../components/Contact-Description";
import InfoContainer from "../components/Info-Container";
import ContactCommunication from "../components/Contact-Communication";

interface Data {
  description?: string;
  contact: {
    phone_number: number;
    email_address: string;
  };
  tags?: { id: number; name: string; color: string }[];
}

const DATA: Data = {
  description: "",
  contact: {
    phone_number: 54,
    email_address: "",
  },
  tags: [{ id: 1, name: "tagger", color: "red" }],
};

const ContactInfo = () => {
  const { description, contact, tags } = DATA;

  return (
    <View style={styles.container}>
      <InfoContainer title="Description">
        <ContactDescription description={description} />
      </InfoContainer>

      <InfoContainer title="Contact">
        <ContactCommunication contact={contact} />
      </InfoContainer>

      <InfoContainer title="Tags">
        <ThemedText>einfo here also </ThemedText>
      </InfoContainer>

      <InfoContainer title="Experience">
        <ThemedText>einfo here</ThemedText>
      </InfoContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default ContactInfo;
