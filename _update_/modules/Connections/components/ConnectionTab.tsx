import React from "react";
import { View } from "react-native";
import ConnectionTabItem from "./ConnectionTabItem";

interface ConnectionTabProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}

const ConnectionTab: React.FC<ConnectionTabProps> = ({
  setActiveTab,
  activeTab,
}) => {
  const listTabs = ["Connections", "Groups", "Starred"];

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      {listTabs.map((tab) => (
        <ConnectionTabItem
          key={tab}
          title={tab}
          onPress={() => handleTabPress(tab)}
          isActiveTab={activeTab === tab}
        />
      ))}
    </View>
  );
};

export default ConnectionTab;
