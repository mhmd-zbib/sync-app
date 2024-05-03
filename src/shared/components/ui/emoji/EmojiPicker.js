import React, { memo, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView } from "react-native-tab-view";
import categories from "../../../../data/emoji/categories";
import EmojiCategory from "./EmojiCategory";
import TabBar from "./EmojiTabBar";

const EmojiPicker = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState(
    categories.tabs.map((tab) => ({ key: tab.category, title: tab.tabLabel }))
  );

  const renderScene = ({ route }) => <EmojiCategory category={route.key} />;

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <TabView
        renderTabBar={(props) => <TabBar setIndex={setIndex} {...props} />}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default memo(EmojiPicker);
