import Separator from "@/components/Separator";
import ThemedText from "@/components/ThemedText";
import React from "react";
import EmptyComponent from "./Empty-Component";
import { View } from "react-native";

interface ContactCommunicationProps {
  contact: {
    phone_number: number;
    email_address: string;
  };
}

const ContactItem = ({ title, value }: { title: string; value: any }) => {
  if (!value) return;
  return (
    <View style={{ gap: 6 }}>
      <ThemedText variant="secondary">{title}</ThemedText>
      <ThemedText size={16}>{value}</ThemedText>
    </View>
  );
};

const ContactCommunication = ({ contact }: ContactCommunicationProps) => {
  if (!contact.email_address && !contact.phone_number)
    return <EmptyComponent />;
  return (
    <>
      <ContactItem title="Email Address" value={contact.email_address} />
      {contact.email_address && contact.phone_number && <Separator />}
      <ContactItem title="Phone Number" value={contact.phone_number} />
    </>
  );
};

export default ContactCommunication;
