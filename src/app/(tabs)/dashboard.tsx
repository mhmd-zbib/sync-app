import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import DashboardContact from "@/modules/Dashboard/features/Dashboard-Contact";
import DashboardConnection from "@/modules/Dashboard/features/Reminders-Created";
import React from "react";
import { ScrollView, View } from "react-native";

const DashboardScreen = () => {
  const theme = useTheme();

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
        <DashboardContact />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
