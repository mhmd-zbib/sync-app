import ContactHeader from "@/features/Contacts/features/Contact-Header";
import ContactInfo from "@/features/Contacts/features/Contact-Info";
import { Slot, useLocalSearchParams } from "expo-router";
import React from "react";

const ContactLayout = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <ContactHeader />

      <ContactInfo />

      {/* <Slot /> */}
    </>
  );
};

export default ContactLayout;
