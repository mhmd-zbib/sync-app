/**
 * Connection list item
 */

import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import { AntDesign, Octicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { ContactItemProps } from "../../types/interfaces";
import ConnectionItem from "./Connection-Item";
import { useTheme } from "@/hooks/useColorScheme";
import { formatDateDMY } from "@/utils/format-date";

const ContactListItem = ({ contact }: ContactItemProps) => {
  const theme = useTheme();
  return (
    <ConnectionItem href={`contact/${contact.id}`}>
      <View>
        {contact.isStarred && (
          <AntDesign
            name="star"
            style={{
              position: "absolute",
              zIndex: 800,
              right: 0,
              bottom: 0,
            }}
            size={18}
            color={"#D69010"}
          />
        )}
        <Avatar name={contact.name} />
      </View>

      <ThemedText>{contact.name}</ThemedText>
      {contact.isPinned && (
        <Octicons name="pin" size={16} color={theme.textAccent} />
      )}

      <ThemedText variant="secondary" size={12} style={{ marginLeft: "auto" }}>
        {formatDateDMY(contact.createdAt)}
      </ThemedText>
    </ConnectionItem>
  );
};

export default ContactListItem;
