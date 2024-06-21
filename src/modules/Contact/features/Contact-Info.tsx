import Separator from "@/components/Separator";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { StyleSheet, View } from "react-native";
import InfoContainer from "../components/Info-Container";
import TagListItem from "../components/Contact-Info/Tag-List-Item";
import EmptyComponent from "../components/Contact-Info/Empty-Component";

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
  const { description, contact, tags = [], experience = [] } = DATA || {};

  return (
    <View style={styles.container}>
      <InfoContainer title="Description">
        {description ? (
          <ThemedText>{description}</ThemedText>
        ) : (
          <EmptyComponent />
        )}
      </InfoContainer>

      <InfoContainer title="Contact">
        {!contact.email_address && !contact.phone_number ? (
          <EmptyComponent />
        ) : (
          <>
            {contact.email_address && (
              <View>
                <ThemedText variant="secondary">Email Address</ThemedText>
                <ThemedText size={16}>{contact.email_address}</ThemedText>
              </View>
            )}
            {contact.phone_number && contact.email_address && <Separator />}
            {contact.phone_number && (
              <View>
                <ThemedText variant="secondary">Phone Number</ThemedText>
                <ThemedText size={16}>{contact.phone_number}</ThemedText>
              </View>
            )}
          </>
        )}
      </InfoContainer>

      <InfoContainer
        title="Tags"
        style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        {tags.length > 0 ? (
          tags.map((tag, index) => <TagListItem key={index} tag={tag} />)
        ) : (
          <EmptyComponent />
        )}
      </InfoContainer>

      <InfoContainer title="Experience">
        {experience.length > 0 ? (
          experience.map((exp, index) => (
            <>
              <View style={{ gap: 8 }}>
                <ThemedText size={18}>{exp.title}</ThemedText>

                <View style={{ flexDirection: "row", gap: 10 }}>
                  <ThemedText variant="accent">
                    {exp.company_name}
                    {"  ●  "}
                    {exp.from_date}
                    {"  ●  "}
                    {exp.to_date ? exp.to_date : "Current"}
                  </ThemedText>
                </View>

                <ThemedText>{exp.description}</ThemedText>
              </View>

              {index !== experience.length - 1 && <Separator />}
            </>
          ))
        ) : (
          <EmptyComponent />
        )}
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
