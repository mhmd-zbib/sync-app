import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import InfoSection from "../Info";
import { useTheme } from "../../../../shared/stores/themeStore";
import NotesSection from "../Notes";

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "1", title: "Infoss" },
    { key: "2", title: "Second" },
  ]);

  const renderScene = SceneMap({
    1: InfoSection,
    2: NotesSection,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.primary }}
      style={{ backgroundColor: "transparent" }}
      labelStyle={{ color: theme.textPrimary }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}
