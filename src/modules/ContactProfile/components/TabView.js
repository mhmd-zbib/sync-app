import React, { useState } from "react";
import { Dimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useTheme } from "../../../shared/stores/themeStore";
import NotesTab from "../../Notes";
import InfoTab from "../features/Info";
import RemindersTab from "../features/Reminders";

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 1, title: "Info" },
    { key: 2, title: "Notes" },
    { key: 3, title: "Reminders" },
  ]);

  const renderScene = SceneMap({
    1: InfoTab,
    2: NotesTab,
    3: RemindersTab,
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
      t
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}
