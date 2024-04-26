import { useMemo } from "react";
import useSearch from "../../../../../shared/hooks/useSearch";
import { useSort } from "../../../../../shared/hooks/useSort";
import { useConnectionsSearchStore } from "../../../store/useConnectionSearchStore";

const useContactList = (contacts) => {
  const searchTerm = useConnectionsSearchStore((state) => state.searchTerm);
  const filteredContacts = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort.byName(filteredContacts, "name");

  return useMemo(() => sortedContacts, [sortedContacts]);
};

export default useContactList;
