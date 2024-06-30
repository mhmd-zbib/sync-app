import NavTab from "@/components/ui/Nav-Tabs";
import ScreenTitle from "@/components/ui/Screen-Title";
import { Slot } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

const DashboardLayouts = () => {
  const navItems = [
    { path: `/dashboard`, title: "Reminders" },
    { path: `/dashboard/notes`, title: "Contacts" },
    { path: `/dashboard/reminders`, title: "Notes" },
    { path: `/dashboard/groups`, title: "Goals" },
  ];

  return (
    <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll>
      <ScreenTitle title="My Sync" />

      <NavTab navItems={navItems} />

      <Slot />
    </ScrollView>
  );
};

export default DashboardLayouts;
