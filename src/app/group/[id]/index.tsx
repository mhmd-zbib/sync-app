import data from "@/__test__/data/Contacts.json";
import ContactList from "@/modules/Contact/features/Contact-List";
import React from "react";

const GroupConnectionScreen = () => {
  return <ContactList data={data} />;
};

export default GroupConnectionScreen;
