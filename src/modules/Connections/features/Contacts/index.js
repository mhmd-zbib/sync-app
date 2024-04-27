/**
 * The initial start of contacts list screen
 */

import React from "react";
import ContactList from "./components/ContactList";
import useContactList from "./hooks/useContactList";
import useGetContacts from "./hooks/useGetContacts";
import Loading from "../../../../shared/components/layout/Loading";
import EmptyList from "../../../../shared/components/layout/EmptyList";

const Contacts = () => {
  //get contacts
  const { data: contacts, isLoading, isError, error } = useGetContacts();

  //sort contacts and apply search hook on them
  const sortedContacts = useContactList(contacts);

  //cases of render
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  if (contacts === 0 || contacts.length === 0)
    return <EmptyList title="connections" />;

  //successful render of contacts
  return <ContactList contacts={sortedContacts} />;
};

export default Contacts;
