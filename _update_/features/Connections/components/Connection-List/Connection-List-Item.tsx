/**
 * Connection item for ConnectionList (mainly contacts now)
 */

import Avatar from "@/components/Avatar";
import { Card } from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { ContactListItem } from "../../types/interfaces";
import { Link } from "expo-router";

const ConnectionListItem = ({ contact, onPress }: ContactListItem) => {
  return (
    <Link href={`contact/${contact.id}`} asChild>
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
    </Link>
  );
};

export default ConnectionListItem;