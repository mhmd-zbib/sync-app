import { Card } from "@/components/Card";
import GroupAvatar from "@/components/GroupAvatar";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";

interface ContactGroupProps {
  group: GroupType;
}

const ContactGroupItem = ({ group }: ContactGroupProps) => {
  const theme = useTheme();
  const { color, emoji } = group;

  return (
    <Card
      style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }}>
      <GroupAvatar color={color} emoji={emoji} size={40} />
      <View style={{ alignItems: "flex-start" }}>
        <ThemedText>{group.name}</ThemedText>
        <ThemedText size={12} variant="accent" numberOfLines={1}>
          {group.memberCount} Connections
        </ThemedText>
      </View>
    </Card>
  );
};

export default ContactGroupItem;
