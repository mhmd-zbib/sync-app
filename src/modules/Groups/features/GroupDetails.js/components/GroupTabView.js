import * as React from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import GroupContactTab from "../../GroupContacts";
import GroupNoteTab from "../../GroupNotes";
import { useTheme } from "../../../../../shared/stores/themeStore";

const renderScene = SceneMap({
  first: GroupContactTab,
  second: GroupNoteTab,
});

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

const GroupTabView = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Contacts" },
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

export default GroupTabView;
