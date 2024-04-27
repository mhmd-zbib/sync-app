import React from "react";
import ContactList from "./components/ContactList";
import useContactList from "./hooks/useContactList";
import useGetContacts from "./hooks/useGetContacts";
import Loading from "../../../../shared/components/layout/Loading";
import EmptyList from "../../../../shared/components/layout/EmptyList";

const Contacts = () => {
  const { data: contacts, isLoading, isError, error } = useGetContacts();

  console.log(contacts);
  const sortedContacts = useContactList(contacts);
  console.log(sortedContacts, "sortsed");

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  if (contacts === 0 || contacts.length === 0)
    return <EmptyList title="connections" />;

  return <ContactList contacts={sortedContacts} />;
};

export default Contacts;
