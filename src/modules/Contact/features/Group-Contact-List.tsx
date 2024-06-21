import React from "react";
import ContactList from "./Contact-List";
import data from "@/__test__/data/Contacts.json";

const GroupContactList = () => {
  return <ContactList data={data} />;
};

export default GroupContactList;
