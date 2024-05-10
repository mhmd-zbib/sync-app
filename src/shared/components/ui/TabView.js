import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useTheme } from "../../stores/themeStore";

const renderTabBar = (props) => {
  const theme = useTheme();
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.primary }}
      style={{ backgroundColor: "transparent" }}
    />
  );
};

const TabSlides = ({ routes, renderScene }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      sceneContainerStyle={{ padding: 10, paddingTop: 20 }}
    />
  );
};

export default TabSlides;

const styles = StyleSheet.create({});
