import Avatar from "@/components/Avatar";
import { Card } from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import ContactTagItem from "@/modules/Contact/components/Contact-Info/Tag-List-Item";
import { formatShortDate } from "@/utils/format-date";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Contact } from "../types/interface";

export interface ContactItemProps {
  contact: Contact;
  onPress?: () => void;
}

const ContactItem = ({ contact }: ContactItemProps) => {
  const theme = useTheme();
  return (
    <Link href={`contact/${contact.id}`} asChild>
      <Card
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingVertical: 12,
        }}>
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
          {contact.tag && <ContactTagItem tag={contact.tag} />}
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
      </Card>
    </Link>
  );
};

export default ContactItem;
