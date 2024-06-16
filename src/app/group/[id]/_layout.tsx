import NavTab from "@/components/Nav-Tabs";
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
        <GroupHeader />
        <NavTab navItems={navItems} justifyContent="flex-start" />
        <Slot />
      </View>
    </ScrollView>
  );
};

export default GroupLayout;
