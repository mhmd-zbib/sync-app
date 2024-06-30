import NavTab from "@/components/ui/Nav-Tabs";
import ScreenTitle from "@/components/ui/Screen-Title";
import SearchInput from "@/components/ui/SearchInput";
import { Slot } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const ConnectionsLayout = () => {
  const navItems = [
    { path: "/connections", title: "Connections" },
    { path: "/connections/groups", title: "Groups" },
    { path: "/connections/starred", title: "Starred" },
    { path: "/connections/tagged", title: "Tagged" },
  ];

  return (
    <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll>
      {/* <Navigator router={TabRouter}> */}
      <ScreenTitle title="Connections" />
      <SearchInput padding />
      <NavTab navItems={navItems} />
      <View style={{ marginTop: 10 }}>
        <Slot />
      </View>
      {/* </Navigator> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default ConnectionsLayout;
