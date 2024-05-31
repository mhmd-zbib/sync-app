/**
 * Left of at rendering the parts for the screens and every part of them
 */

import { useTheme } from "@/hooks/useColorScheme";
import React, { useState } from "react";
import { FlatList, TextInput } from "react-native";
import ContactListItem from "./ConnectionListItem";
import ConnectionTab from "./ConnectionTab";
import useSearch from "@/hooks/useSearch";
import ThemedText from "@/components/ThemedText";

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

  const theme = useTheme();
  const [searchTerm, setSearch] = useState("");
  const filteredData = activeTab === "Connections" ? data.contact : data.group;

  const filteredPeople = useSearch(
    filteredData,
    searchTerm,
    (contact) => contact.name
  );
  console.log(filteredPeople, "ey");

  return (
    <>
      {/* <ThemedText>hi</ThemedText> */}
      <FlatList
        ListHeaderComponentStyle={{
          backgroundColor: theme.background, // assuming theme is defined somewhere
          paddingBottom: 10,
        }}
        ListHeaderComponent={
          <>
            <TextInput value={searchTerm} onChangeText={setSearch} />
            <ConnectionTab setActiveTab={setActiveTab} activeTab={activeTab} />
          </>
        }
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        data={filteredPeople}
        contentContainerStyle={{ paddingTop: 10 }}
        renderItem={({ item }) => <ContactListItem contact={item} />}
      />
    </>
  );
};

export default ConnectionList;
