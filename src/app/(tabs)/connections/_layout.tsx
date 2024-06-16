import Button from "@/components/Button";
import NavTab from "@/components/Nav-Tabs";
import SearchInput from "@/components/SearchInput";
import { Link, Slot, usePathname } from "expo-router";
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
    <View style={{ gap: 10, flex: 1, marginTop: 10 }}>
      <SearchInput />
      <NavTab navItems={navItems} />
      <Slot />
    </View>
  );
};

export default ConnectionsLayout;
