import { View, Text } from "react-native";
import React from "react";
import ContactList from "@/modules/Contact/features/Contact-List";
import data from "@/__test__/data/Contacts.json";

const GroupConnectionScreen = () => {
  return <ContactList data={data} />;
};

export default GroupConnectionScreen;
