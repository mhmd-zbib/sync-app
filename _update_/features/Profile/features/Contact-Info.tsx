import ThemedText from "@/components/ThemedText";
import React from "react";
import { StyleSheet, View } from "react-native";
import ContactDescription from "../components/Info/Contact-Description";
import InfoContainer from "../components/Info/Info-Container";
import ContactCommunication from "../components/Info/Contact-Communication";
import { ContactTagList } from "../components/Info/Contact-Tag-List";
import ContactExperience from "../components/Info/Contact-Experience";

const DATA = {
  description: "",
  contact: {
    phone_number: 54,
    email_address: "afa",
  },
  tags: [
    { name: "contact", id: 1, color: "orange" },
    { name: "contact", id: 1, color: "red" },
    { name: "contact", id: 1, color: "purple" },
    { name: "contact", id: 1, color: "pink" },
    { name: "contact", id: 1, color: "pink" },
    { name: "contact", id: 1, color: "green" },
    { name: "contact", id: 1, color: "blue" },
  ],
  experience: [
    {
      title: "Neurochemical Doctor",
      company_name: "SynaptoSphere ",
      description:
        "At SynaptoSphere NeuroVita Clinic, we're pioneering a revolutionary approach to neurochemical healthcare. Our team of specialists delves deep into the intricate workings of the nervous system, exploring the dynamic interplay of neurotransmitters, hormones, and brain chemistry.",
      from_date: 1672404768,
      to_date: undefined,
    },
    {
      title: "Neurochemical Doctor",
      company_name: "SynaptoSphere ",
      description:
        "At SynaptoSphere NeuroVita Clinic, we're pioneering a revolutionary approach to neurochemical healthcare. Our team of specialists delves deep into the intricate workings of the nervous system, exploring the dynamic interplay of neurotransmitters, hormones, and brain chemistry.",
      from_date: 1672404768,
      to_date: undefined,
    },
  ],
};

const ContactInfo = () => {
  const { description, contact, tags, experience } = DATA;

  return (
    <View style={styles.container}>
      <InfoContainer title="Description">
        <ContactDescription description={description} />
      </InfoContainer>

      <InfoContainer title="Contact">
        <ContactCommunication contact={contact} />
      </InfoContainer>

      <InfoContainer title="Tags">
        <ContactTagList tags={tags} />
      </InfoContainer>

      <InfoContainer title="Experience">
        <ContactExperience experience={experience} />
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
