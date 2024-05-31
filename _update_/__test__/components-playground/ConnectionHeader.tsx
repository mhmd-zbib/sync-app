import ThemedText from "@/components/ThemedText";
import ConnectionTabItem from "@/modules/Connections/components/ConnectionTabItem";
import React, { useState } from "react";
import { View } from "react-native";

const ConnectionsLayout = () => {
  const [tab, setTab] = useState("Connections");
  const listTabs = [
    {
      name: "Connections",
      content: <ThemedText>Connections</ThemedText>,
    },
    {
      name: "Groups",
      content: <ThemedText>Groups</ThemedText>,
    },
    {
      name: "Starred",
      content: <ThemedText>Starred</ThemedText>,
    },
  ];

  const renderTabContent = () => {
    const selectedTab = listTabs.find((t) => t.name === tab);
    return selectedTab ? selectedTab.content : null;
  };

  return (
    <>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {listTabs.map((i) => (
          <ConnectionTabItem
            key={i.name}
            title={i.name}
            onPress={() => setTab(i.name)}
            isActiveTab={tab === i.name}
          />
        ))}
      </View>
    </>
  );
};

export default ConnectionsLayout;
