import NavTab from "@/components/Nav-Tabs";
import ScreenTitle from "@/components/Screen-Title";
import SearchInput from "@/components/SearchInput";
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
      <ScreenTitle title="Connections" />
      <SearchInput style={styles.searchInput} />
      <NavTab navItems={navItems} />
      <View style={{ marginTop: 10 }}>
        <Slot />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 10,
  },
  searchInput: {
    paddingVertical: 10,
    backgroundColor: "black",
  },
});

export default ConnectionsLayout;
