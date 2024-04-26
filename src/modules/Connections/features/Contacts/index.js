import React from "react";
// import ContactsList from "./features/ContactsList";
// import Error from "../../../../components/layout/Error";
// import Loading from "../../../../components/layout/Loading";
// import EmptyList from "../../../../components/ui/EmptyList";
import useContactList from "./hooks/useContactList";
import { fetchContacts } from "./services/fetchContacts";
import ContactList from "./components/ContactList";
import Typography from "../../../../shared/components/ui/Typography";

const Contacts = () => {
  // const { data: contacts, isLoading, isError, error } = fetchContacts();

  const contacts = [
    { name: "Mohammad", id: 1234 },
    { name: "Ali", id: 124 },
  ];

  const sortedContacts = useContactList(contacts);

  console.log(sortedContacts, "sortsed");

  // if (isLoading) return <Loading />;
  // if (isError) return <Error error={error} />;
  // if (contacts === 0 || contacts.length === 0)
  //   return <EmptyList title="connections" />;

  return <ContactList contacts={sortedContacts} />;
};

export default Contacts;
