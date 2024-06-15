import React from "react";
import { StyleSheet, View } from "react-native";
import ContactCommunication from "../components/Contact-Info/Contact-Communication";
import ContactDescription from "../components/Contact-Info/Contact-Description";
import ContactExperience from "../components/Contact-Info/Contact-Experience";
import { ContactTagList } from "../components/Contact-Info/Contact-Tag-List";
import InfoContainer from "../components/Contact-Info/Info-Container";

const DATA = {
  description: "afafas",
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
      <InfoContainer href={`./description/${description}`} title="Description">
        <ContactDescription description={description} />
      </InfoContainer>

      <InfoContainer href={`./communication/${contact}`} title="Contact">
        <ContactCommunication contact={contact} />
      </InfoContainer>

      <InfoContainer href={`./tags/${tags}`} title="Tags">
        <ContactTagList tags={tags} />
      </InfoContainer>

      <InfoContainer title="Experience">
        <ContactExperience experiences={experience} />
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
