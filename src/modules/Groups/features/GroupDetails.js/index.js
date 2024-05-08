import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Typography from "../../../../shared/components/ui/Typography";

const Tab = createMaterialTopTabNavigator();

const data = Array.from({ length: 30 }, (_, i) => ({
  id: String(i),
  title: `Item ${i + 1}`,
}));

const TabBarComponent = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab 1" component={() => <Text>Content of Tab 12</Text>} />
    <Tab.Screen name="Tab 2" component={() => <Text>Content of Tab 2</Text>} />
  </Tab.Navigator>
);

const ListHeader = () => (
  <View style={{ height: 150 }}>
    <Typography>stuff ehre</Typography>

    <NavigationContainer independent={true}>
      <TabBarComponent />
    </NavigationContainer>
  </View>
);

const ListItem = ({ title }) => (
  <View style={styles.item}>
    <Typography>{title} s</Typography>
  </View>
);

const TabBarInsideList = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <FlatList
      data={data}
      ListHeaderComponent={<ListHeader />}
      renderItem={({ item }) => <ListItem title={item.title} />}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default TabBarInsideList;
