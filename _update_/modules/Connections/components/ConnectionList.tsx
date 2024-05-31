import React, { useState } from "react";
import { FlatList } from "react-native";
import ContactListItem from "./ConnectionListItem";
import ConnectionTab from "./ConnectionTab";
import { useTheme } from "@/hooks/useColorScheme";

const ConnectionList = () => {
  const [activeTab, setActiveTab] = useState("Connections");

  const data = {
    contact: [
      { name: "mohammad" },
      { name: "ali" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
      { name: "hussein" },
    ],
    group: [
      { name: "math" },
      { name: "math" },
      { name: "computer" },
      { name: "math" },
      { name: "math" },
      { name: "math" },
      { name: "math" },
      { name: "math" },
      { name: "math" },
    ],
  };

  const filteredData = activeTab === "Connections" ? data.contact : data.group;
  const theme = useTheme();

  return (
    <>
      <FlatList
        ListHeaderComponentStyle={{
          backgroundColor: theme.background,
          paddingBottom: 10,
        }}
        ListHeaderComponent={
          <ConnectionTab setActiveTab={setActiveTab} activeTab={activeTab} />
        }
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        data={filteredData}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => <ContactListItem contact={item} />}
      />
    </>
  );
};

export default ConnectionList;
