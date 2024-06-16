import ContactList from "@/modules/Contact/features/Contact-List";
import React from "react";
import data from "@/__test__/data/Contacts.json";

const ConnectionsLayout = () => {
  return <ContactList data={data} />;
};

export default ConnectionsLayout;
