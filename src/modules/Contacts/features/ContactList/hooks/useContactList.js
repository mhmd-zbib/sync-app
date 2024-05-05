/**
 * Contacts hook for filtering and sorting the contacts (by name for now)
 *
 * @param {Array} contacts
 *
 * @return {Array} returning the sorted ready to use contacts that has been linked to
 *
 */

import { useMemo } from "react";
import useSearch from "../../../../../shared/hooks/useSearch";
import { useSort } from "../../../../../shared/hooks/useSort";
import { useConnectionsSearchStore } from "../../../../Connections/store/useConnectionSearchStore";

const useContactList = (contacts) => {
  const searchTerm = useConnectionsSearchStore((state) => state.searchTerm);
  const filteredContacts = useSearch(contacts, searchTerm, "name");
  const sortedContacts = useSort.byName(filteredContacts, "name");

  return useMemo(() => sortedContacts, [sortedContacts]);
};

export default useContactList;
