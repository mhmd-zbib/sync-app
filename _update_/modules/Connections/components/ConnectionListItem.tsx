/**
 * Connection item for ConnectionList (mainly contacts now)
 */

import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { Card } from "@/components/Card";
import { ContactData, ContactListItem } from "../types/interfaces";

const ConnectionListItem = ({ contact, onPress }: ContactListItem) => {
  return (
    <Card
      onPress={onPress}
      style={{
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}>
      <Avatar name={contact.name} />
      <ThemedText>{contact.name}</ThemedText>
    </Card>
  );
};

export default ConnectionListItem;
