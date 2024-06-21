import data from "@/__test__/data/Contacts.json";
import ContactList from "@/modules/Contact/components/Contact-List";
import React from "react";

const GroupConnectionScreen = () => {
  return <ContactList data={data} />;
};

export default GroupConnectionScreen;
