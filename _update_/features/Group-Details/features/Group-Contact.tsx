import React from "react";
import GroupContactList from "../components/Group-Contact-List";
import SearchInput from "@/components/SearchInput";
import data from "@/__test__/data/Group-Contact.json";

const GroupContact = () => {
  return (
    <>
      <SearchInput />
      <GroupContactList />
    </>
  );
};

export default GroupContact;
