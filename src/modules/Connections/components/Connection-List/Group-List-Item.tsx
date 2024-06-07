/**
 * Group list item
 */

import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GroupItemProps } from "../../types/interfaces";
import ConnectionItem from "./Connection-Item";
import GroupAvatar from "@/components/GroupAvatar";

const GroupListItem = ({ group }: GroupItemProps) => {
  const theme = useTheme();
  return (
    <ConnectionItem href={`group/${group.id}`}>
      <GroupAvatar emoji={group.emoji} color={group.color} size={56} />

      <View style={styles.groupInfo}>
        <ThemedText>{group.name}</ThemedText>
        <ThemedText
          size={12}
          variant="secondary"
          style={{
            marginLeft: "auto",
            paddingVertical: 4,
            paddingHorizontal: 6,
            backgroundColor: theme.accent,
            borderRadius: 20,
          }}>
          {group.memberCount}
        </ThemedText>
      </View>
    </ConnectionItem>
  );
};

const styles = StyleSheet.create({
  groupInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});

export default GroupListItem;
