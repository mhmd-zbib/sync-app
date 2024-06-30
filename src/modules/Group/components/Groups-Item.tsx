//! CHANGE PLACE TO CONTACTS

import { Card } from "@/components/ui/Card";
import GroupAvatar from "@/components/ui/GroupAvatar";
import ThemedText from "@/components/ui/ThemedText";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

interface ContactGroupProps {
  group: GroupType;
}

const GroupsItem = ({ group }: ContactGroupProps) => {
  return (
    <Link href={`group/${group.id}`} asChild>
      <Card
        style={{
          flexDirection: "row",
          flex: 1,
          gap: 10,
          alignItems: "center",
        }}>
        <GroupAvatar color={group.color} emoji={group.emoji} size={42} />
        <View style={{ justifyContent: "space-between" }}>
          <ThemedText size={16}>{group.name}</ThemedText>
          <ThemedText size={12} variant="accent">
            {group.memberCount} Connections
          </ThemedText>
        </View>
      </Card>
    </Link>
  );
};

export default GroupsItem;
