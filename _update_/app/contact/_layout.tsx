import ContactHeader from "@/features/Profile/features/Contact-Header";
import ContactInfo from "@/features/Profile/features/Contact-Info";
import React from "react";
import { ScrollView, View } from "react-native";

const ContactLayout = () => {
  return (
    <ScrollView>
      <ContactHeader />
      <ContactInfo />
    </ScrollView>
  );
};

export default ContactLayout;
