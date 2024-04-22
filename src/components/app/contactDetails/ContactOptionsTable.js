import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ContactInfo from "./info/ContactInfo";
import ContactNotes from "./notes/ContactNotes";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../../ui/text/Typography";
import FloatingAdd from "../../ui/buttons/FloatingAdd";
import { useNavigation } from "@react-navigation/native";

const initialLayout = { width: Dimensions.get("window").width };

export default function ContactOptionsTable() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Info" },
    { key: "second", title: "Notes" },
    { key: "third", title: "Reminders" },
  ]);

  const renderScene = SceneMap({
    first: ContactInfo,
    second: ContactNotes,
    third: () => (
      <View style={[styles.scene, { backgroundColor: "#009688" }]} />
    ),
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

  const navigation = useNavigation();

  const handleAddPress = () => {
    console.log("Add button pressed on tab:", index);

    // navigation.navigate("AddContactNote");
  };

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabView}
      />
      {index !== 0 && <FloatingAdd onPress={handleAddPress} />}
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabView: {
    marginTop: 25,
  },
});
