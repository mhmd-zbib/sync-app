import groups from "@/__test__/data/Groups.json";
import SearchInput from "@/components/SearchInput";
import useSearch from "@/hooks/useSearch";
import React, { useState } from "react";
import ContactGroupList from "../components/Contact-Group-List";

const ContactGroup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchable = useSearch(groups, searchTerm, (item) => item.name);

  return (
    <>
      <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
      <ContactGroupList groups={searchable} />
    </>
  );
};

export default ContactGroup;
