//!   CHANGE PLACE TO CONTACTS

import data from "@/__test__/data/Groups.json";
import React from "react";

import { FlatList } from "react-native";
import ContactGroupsItem from "./Contact-Groups-Item";

interface ContactGroupsProps {
  groups: GroupType[];
}

const ContactGroupsList = () => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => <ContactGroupsItem group={item} />}
      contentContainerStyle={{ gap: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
};

export default ContactGroupsList;
