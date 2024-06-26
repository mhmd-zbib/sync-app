import GroupAvatar from "@/components/ui/GroupAvatar";
import NavTab from "@/components/ui/Nav-Tabs";
import ThemedText from "@/components/ui/ThemedText";
import { useNavigation } from "@react-navigation/native";
import { Slot, useLocalSearchParams } from "expo-router";
import React, { useLayoutEffect } from "react";
import { ScrollView, View } from "react-native";

const GroupLayout = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const navItems = [
    { path: `/group/${id}`, title: "Contacts" },
    { path: `/group/${id}/notes`, title: "Notes" },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({ title: "Group" });
  }, [navigation]);

  return (
    <ScrollView bounces={false} overScrollMode="never">
      <View style={{ gap: 16 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            marginTop: 16,
          }}>
          <GroupAvatar size={80} emoji="smiley" color="red" />
          <View style={{ justifyContent: "center" }}>
            <ThemedText size={20}>Math</ThemedText>
            <ThemedText variant="secondary" size={16}>
              Doctor
            </ThemedText>
          </View>
        </View>
        <NavTab navItems={navItems} justifyContent="flex-start" />
        <Slot />
      </View>
    </ScrollView>
  );
};

export default GroupLayout;
