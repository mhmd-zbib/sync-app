import data from "@/__test__/data/Contacts.json";
import ContactList from "@/features/Contact/components/Contact-List";
import React from "react";

const GroupConnectionScreen = () => {
  return <ContactList data={data} scrollEnabled={false} />;
};

export default GroupConnectionScreen;
