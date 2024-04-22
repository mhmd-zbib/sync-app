import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import ContactInfoMain from "./info/ContactInfoMain";
import { useTheme } from "../../../stores/shared/themeStore";

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: ContactInfoMain,
  second: SecondRoute,
});

const renderTabBar = (props) => {
  const theme = useTheme();
  return (
    <TabBar
      indicatorStyle={{ backgroundColor: theme.primary }}
      style={{ backgroundColor: "transparent" }}
      {...props}
    />
  );
};

const ContactDetailsTable = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Info" },
    { key: "second", title: "Notes" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default ContactDetailsTable;

const styles = StyleSheet.create({});
