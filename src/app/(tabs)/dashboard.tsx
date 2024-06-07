import ThemedText from "@/components/ThemedText";
import DashboardConnection from "@/modules/Dashboard/features/Dashboard-Connection";
import React from "react";
import { ScrollView, View } from "react-native";

const DashboardScreen = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 10, gap: 26 }}>
        <View>
          <ThemedText size={26} style={{ fontWeight: "700" }}>
            My Sync
          </ThemedText>
          <ThemedText variant="secondary">
            What gets measured gets improved.
          </ThemedText>
        </View>

        <DashboardConnection />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
