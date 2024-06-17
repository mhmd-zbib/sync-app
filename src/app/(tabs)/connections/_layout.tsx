import NavTab from "@/components/Nav-Tabs";
import ScreenTitle from "@/components/Screen-Title";
import SearchInput from "@/components/SearchInput";
import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";

const ConnectionsLayout = () => {
  const navItems = [
    { path: "/connections", title: "Connections" },
    { path: "/connections/groups", title: "Groups" },
    { path: "/connections/starred", title: "Starred" },
    { path: "/connections/tagged", title: "Tagged" },
  ];
  return (
    <View style={{ gap: 10, flex: 1, marginTop: 10, marginHorizontal: 10 }}>
      <ScreenTitle title="Connections" />
      <SearchInput />
      <NavTab navItems={navItems} />
      <Slot />
    </View>
  );
};

export default ConnectionsLayout;
