import ContactList from "@/modules/Contact/features/Contact-List";
import React from "react";
import data from "@/__test__/data/Contacts.json";

const ContactsScreen = () => {
  return <ContactList data={data} />;
};

export default ContactsScreen;
