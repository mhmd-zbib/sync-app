import { View, Text } from "react-native";
import React from "react";
import ConnectionTabItem from "@/modules/Connections/components/ConnectionsTab/ConnectionTabItem";

const ConnectionsTab = () => {
  return (
    <View style={{ flexDirection: "row", gap: 6 }}>
      <ConnectionTabItem title="Connections" href="(connections)" />
      <ConnectionTabItem title="Groups" href="starred" />
      <ConnectionTabItem title="Groups" href="groups" />
    </View>
  );
};

export default ConnectionsTab;
