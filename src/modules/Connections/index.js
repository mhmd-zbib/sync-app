import React from "react";
import { StyleSheet } from "react-native";
import ConnectionsList from "./components/ConnectionsList";
import { useConnectionsSearchStore } from "./store/useConnectionSearchStore";

const ConnectionsScreen = () => {
  return <ConnectionsList />;
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flex: 1,
  },
});

export default ConnectionsScreen;
