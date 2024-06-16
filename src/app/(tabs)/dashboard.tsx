import ScreenTitle from "@/components/Screen-Title";
import DashboardContact from "@/modules/Dashboard/features/Dashboard-Contact";
import DashboardConnection from "@/modules/Dashboard/features/Reminders-Created";
import React from "react";
import { ScrollView, View } from "react-native";

const DashboardScreen = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 10, gap: 26, marginTop: 10 }}>
        <ScreenTitle
          title="My Sync"
          subtitle="What gets measured gets improved"
        />
        <DashboardConnection />
        <DashboardContact />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
