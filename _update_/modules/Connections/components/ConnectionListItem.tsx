import Avatar from "@/components/Avatar";
import { Card } from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

interface ContactData {
  contact: {
    name: string;
    created_at?: number;
  };
}

const ConnectionListItem = ({ contact }: ContactData) => {
  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}>
        <Avatar name={contact.name} />
        <ThemedText>{contact.name}</ThemedText>
      </View>
    </Card>
  );
};

export default ConnectionListItem;
