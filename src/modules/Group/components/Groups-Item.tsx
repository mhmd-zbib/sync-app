import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import Card from "@/components/ui/Card";
import GroupAvatar from "@/components/ui/GroupAvatar";
import ThemedText from "@/components/ui/ThemedText";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10, // Adjusted spacing between avatar and text
    justifyContent: "space-between",
  },
});

interface ContactGroupProps {
  group: GroupType;
}

const GroupsItem = ({ group }: ContactGroupProps) => {
  return (
    <Card href={`group/${group.id}`} style={styles.cardContainer}>
      <GroupAvatar color={group.color} emoji={group.emoji} size={42} />
      <View style={styles.textContainer}>
        <ThemedText size={16}>{group.name}</ThemedText>
        <ThemedText size={12} variant="accent">
          {group.memberCount} Connections
        </ThemedText>
      </View>
    </Card>
  );
};

export default memo(GroupsItem);
