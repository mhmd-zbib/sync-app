import React, { useState } from "react";
import { Dimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useTheme } from "../../../../shared/stores/themeStore";
import InfoTab from "../Info";
import NotesSection from "../Notes";

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "1", title: "Info" },
    { key: "2", title: "Notes" },
  ]);

  const renderScene = SceneMap({
    1: InfoTab,
    2: NotesSection,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.primary }}
      style={{ backgroundColor: theme.background }}
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
