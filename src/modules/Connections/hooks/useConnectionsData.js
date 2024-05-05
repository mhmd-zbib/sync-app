import { useState } from "react";
import useSearch from "../../../shared/hooks/useSearch";
import useSort from "../../../shared/hooks/useSort";
import useGetContacts from "../../Contacts/features/ContactList/hooks/useGetContacts";

export default function useConnectionsData(searchTerm) {
  const [category, setCategory] = useState("contacts");
  const { data: contacts, isLoading, error } = useGetContacts();
  const dummyGroups = [
    { title: "Group 1", id: 2 },
    { title: "Group 2", id: 1 },
  ];

  const sortedContacts = useSort(contacts, "name");
  const sortedGroups = useSort(dummyGroups, "title");

  const searchableContacts = useSearch(sortedContacts, searchTerm, "name");
  const searchableGroups = useSearch(sortedGroups, searchTerm, "title");

  const data = {
    contacts: searchableContacts,
    groups: searchableGroups,
  };

  return { category, data, setCategory, isLoading, error };
}
