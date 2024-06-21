import ContactList from "@/modules/Contact/components/Contact-List";
import React from "react";
import data from "@/__test__/data/Contacts.json";

const ContactsScreen = () => {
  return <ContactList data={data} />;
};

export default ContactsScreen;
