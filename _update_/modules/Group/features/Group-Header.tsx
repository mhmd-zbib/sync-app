import { View, Text } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import GroupAvatar from "@/components/GroupAvatar";

const GroupHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        marginTop: 16,
      }}>
      <GroupAvatar size={80} emoji="smiley" color="red" />
      <View style={{ justifyContent: "center" }}>
        <ThemedText size={20}>Math</ThemedText>
        <ThemedText variant="secondary" size={16}>
          Doctor
        </ThemedText>
      </View>
    </View>
  );
};

export default GroupHeader;
