import SearchInput from "@/components/SearchInput";
import ConnectionsTab from "@/modules/Connections/components/Connection-Tab";
import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";

const ConnectionsLayout = () => {
  return (
    <View style={{ gap: 10 }}>
      <SearchInput />
      <ConnectionsTab />
      <Slot />
    </View>
  );
};

export default ConnectionsLayout;
