// src/components/ProfileTabs.jsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NoteListScreen from "../../../../Notes/features/NoteList";
import ProfileInfo from "../ProfileInfo";
import { useTheme } from "../../../../../shared/stores/themeStore";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Info");
  const theme = useTheme();

  const renderContent = () => {
    switch (activeTab) {
      case "Info":
        return <ProfileInfo />;
      case "Notes":
        return <NoteListScreen />;
      case "Reminders":
        // Replace with your Reminders component
        return <Text>Reminders Content</Text>;
      case "Groups":
        // Replace with your Groups component
        return <Text>Groups Content</Text>;
      default:
        return <ProfileInfo />;
    }
  };

  const TabButton = ({ tabName, label }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setActiveTab(tabName)}
      style={[
        styles.tab,
        {
          backgroundColor: activeTab === tabName ? theme.primary : null,
          borderColor: activeTab === tabName ? null : theme.accent,
        },
      ]}>
      <Text
        style={[styles.tabText, activeTab === tabName && styles.activeTabText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TabButton tabName="Info" label="Info" />
        <TabButton tabName="Notes" label="Notes" />
        <TabButton tabName="Reminders" label="Reminders" />
        <TabButton tabName="Groups" label="Groups" />
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 500,
    borderWidth: 1,
    marginBottom: 20,
  },
  tabText: {
    fontSize: 16,
    color: "#888",
  },
  activeTabText: {
    fontSize: 16,
    color: "#000",
    fontWeight: 500,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ProfileTabs;
