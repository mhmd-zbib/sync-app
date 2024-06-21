import reminders from "@/__test__/data/Reminders.json";
import SearchInput from "@/components/SearchInput";
import ReminderList from "@/modules/Reminders/components/Reminder-List";
import { View } from "react-native";
import ProgressBar from "@/components/Progress-Bar";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, marginTop: 10, marginHorizontal: 10, gap: 10 }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}>
        <View
          style={{
            flexDirection: "row",
            borderRadius: 200,
            gap: 8,
            paddingHorizontal: 16,
            paddingVertical: 9,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.secondary,
          }}>
          <FontAwesome5 name="bolt" size={16} color={theme.primary} />
          <ThemedText variant="secondary">23</ThemedText>
        </View>
        <View
          style={{ width: "50%", gap: 4, position: "absolute", left: "25%" }}>
          <ThemedText>Reminders Goals</ThemedText>
          <ProgressBar />
        </View>
      </View>
      <SearchInput />
      <ReminderList data={reminders} />
    </View>
  );
}
