import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ContactInfo from "./info/ContactInfo";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../../ui/text/Typography";
import { PanResponderAdapter } from "react-native-tab-view/src/PanResponderAdapter";

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#009688" }]} />
);

const initialLayout = { width: Dimensions.get("window").width };

export default function ContactOptionsTable() {
  const theme = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Info" },
    { key: "second", title: "Notes" },
    { key: "third", title: "Reminders" },
    // { key: "fourth", title: "Groups" },
  ]);

  const renderScene = SceneMap({
    first: ContactInfo,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({ route }) => (
        <View style={{ flex: 1, margin: 0 }}>
          <Typography>{route.title}</Typography>
        </View>
      )}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderColor: theme.accent,
      }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
