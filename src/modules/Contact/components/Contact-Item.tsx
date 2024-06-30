import Avatar from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { Octicons } from "@expo/vector-icons";
import React, { memo } from "react";
import { View } from "react-native";
import { Contact } from "../types/interface";

export interface ContactItemProps {
  contact: Contact;
}

const ContactItem = memo(({ contact }: ContactItemProps) => {
  const theme = useTheme();
  return (
    <Card
      href="/"
      style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <Avatar star={contact.isStarred} name={contact.name} />
      <ThemedText>{contact.name}</ThemedText>

      <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
        {contact.isPinned && (
          <Octicons name="pin" size={16} color={theme.textAccent} />
        )}
        <ThemedText variant="secondary">{contact.createdAt}</ThemedText>
      </View>
    </Card>
  );
});

export default ContactItem;
