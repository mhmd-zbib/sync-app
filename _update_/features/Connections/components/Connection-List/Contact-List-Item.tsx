/**
 * Connection list item
 */

import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { ContactItemProps } from "../../types/interfaces";
import ConnectionItem from "./Connection-Item";

const ContactListItem = ({ contact }: ContactItemProps) => {
  return (
    <ConnectionItem href={`contact/${contact.id}`}>
      <Avatar name={contact.name} />
      <ThemedText>{contact.name}</ThemedText>
    </ConnectionItem>
  );
};

export default ContactListItem;
