import ScreenTitle from "@/components/Screen-Title";
import DashboardContainer from "@/modules/Dashboard/components/Dashboard-Container";
import ContactsCreated from "@/modules/Dashboard/features/Contacts-Created";
import RemindersCreated from "@/modules/Dashboard/features/Reminders-Created";
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
        <DashboardContainer title="Reminders">
          <RemindersCreated />
        </DashboardContainer>
        <DashboardContainer title="Contacts">
          <ContactsCreated />
        </DashboardContainer>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
