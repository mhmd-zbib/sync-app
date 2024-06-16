/**
 * Render of ConnectionTabItem were it maps the buttons
 * Controls the filter options of the ConnectionList
 */

import Button from "@/components/Button";
import { Link, usePathname } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

const ConnectionsTab = () => {
  const path = usePathname();

  // Define the navigation items with their respective paths and titles
  const navItems = [
    { path: "/connections", title: "Connections" },
    { path: "/connections/groups", title: "Groups" },
    { path: "/connections/starred", title: "Starred" },
    { path: "/connections/tagged", title: "Tagged" },
    { path: "/connections/untagged", title: "un-Tagged" },
  ];

  // Function to determine if the current path is active
  const isActive = (navPath: string) => {
    return path === navPath;
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} asChild>
            <Button
              rounded
              variant={isActive(item.path) ? "primary" : "secondary"}
              title={item.title}
            />
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default ConnectionsTab;
