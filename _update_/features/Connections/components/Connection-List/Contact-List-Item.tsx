/**
 * Connection list item
 */

import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import ContactTagItem from "@/features/Profile/components/Info/Contact-Tag-Item";
import { useTheme } from "@/hooks/useColorScheme";
import { formatShortDate } from "@/utils/format-date";
import { AntDesign, Octicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { ContactItemProps } from "../../types/interfaces";
import ConnectionItem from "./Connection-Item";

const ContactListItem = ({ contact }: ContactItemProps) => {
  const theme = useTheme();
  return (
    <ConnectionItem href={`contact/${contact.id}`}>
      <View>
        {contact.isStarred && (
          <View
            style={{
              position: "absolute",
              zIndex: 800,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <AntDesign
              style={{ position: "absolute" }}
              name="star"
              size={18}
              color={"#ffcd17"}
            />
            <AntDesign name="staro" size={20} color={"white"} />
          </View>
        )}
        <Avatar name={contact.name} />
      </View>
      <View style={{ gap: 5 }}>
        <ThemedText>{contact.name}</ThemedText>
        {contact.tag && (
          <ContactTagItem tag={contact.tag} />

          // <ThemedText
          //   variant="secondary"
          //   style={{
          //     backgroundColor: theme.accent,
          //     paddingVertical: 3,
          //     paddingHorizontal: 8,
          //     borderRadius: 5,
          //   }}
          //   size={12}>
          //   {contact.position}
          // </ThemedText>
        )}
      </View>

      <View
        style={{
          marginLeft: "auto",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 8,
        }}>
        <ThemedText variant="secondary" size={12}>
          {formatShortDate(contact.createdAt)}
        </ThemedText>
        {contact.isPinned && (
          <Octicons name="pin" size={16} color={theme.textAccent} />
        )}
      </View>
    </ConnectionItem>
  );
};

export default ContactListItem;
