import Person1 from "@/__test__/hoc/Person1";
import EmptyList from "@/components/Empty-List";
import Loading from "@/components/Loading";
import ContactList from "@/modules/Contact/components/Contact-List";
import { useContacts } from "@/modules/Contact/query/get-contacts";
import React from "react";

const ContactsScreen = () => {
  const contactsQuery = useContacts();

  if (contactsQuery.isLoading) {
    return <Loading />;
  }

  if (contactsQuery.data?.length === 0) {
    return <EmptyList />;
  }

  return <ContactList data={contactsQuery.data} />;
};

export default ContactsScreen;
