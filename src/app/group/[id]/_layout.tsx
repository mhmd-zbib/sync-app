import GroupAvatar from "@/components/GroupAvatar";
import NavTab from "@/components/Nav-Tabs";
import ThemedText from "@/components/ThemedText";
import GroupHeader from "@/modules/Group/components/Group-Header";
import { Slot, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

const GroupLayout = () => {
  const { id } = useLocalSearchParams();
  const navItems = [
    { path: `/group/${id}`, title: "Contacts" },
    { path: `/group/${id}/notes`, title: "Notes" },
  ];

  return (
    <ScrollView bounces={false} overScrollMode="never">
      <View style={{ paddingHorizontal: 10, gap: 16 }}>
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
        <NavTab navItems={navItems} justifyContent="flex-start" />
        <Slot />
      </View>
    </ScrollView>
  );
};

export default GroupLayout;
