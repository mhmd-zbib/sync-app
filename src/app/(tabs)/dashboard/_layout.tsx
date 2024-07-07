import NavTab from "@/components/ui/Nav-Tabs";
import ScreenTitle from "@/components/ui/Screen-Title";
import { Slot } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

const DashboardLayouts = () => {
  const navItems = [
    { path: `/dashboard`, title: "Reminders" },
    { path: `/dashboard/contacts`, title: "Contacts" },
    { path: `/dashboard/reminders`, title: "Notes" },
    { path: `/dashboard/groups`, title: "Goals" },
  ];

  return (
    <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll>
      <ScreenTitle title="My Sync" />

      <View style={{ marginVertical: 10 }}>
        <NavTab navItems={navItems} />
      </View>

      <View style={{ gap: 14 }}>
        <Slot />
      </View>
    </ScrollView>
  );
};

export default DashboardLayouts;
