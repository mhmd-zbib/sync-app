import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../../shared/components/ui/SearchBar";
import Typography from "../../shared/components/ui/Typography";
import SectionList from "./components/SectionList";
import { useConnections } from "./hooks/useConnections";
import { useConnectionsSearchStore } from "./store/useConnectionSearchStore";

const ConnectionsScreen = () => {
  const { setActiveContent, activeContent, getContent } = useConnections();
  const { searchTerm, setSearchTerm } = useConnectionsSearchStore();

  return (
    <View style={styles.container}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SectionList
        onChangeContent={setActiveContent}
        activeContent={activeContent}
      />
      {getContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flex: 1,
  },
});

export default ConnectionsScreen;
