import ProgressBar from "@/components/Progress-Bar";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

const ReminderScreenHeader = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
      }}>
      <View
        style={{
          flexDirection: "row",
          borderRadius: 200,
          gap: 5,
          paddingHorizontal: 16,
          paddingVertical: 9,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.secondary,
        }}>
        <FontAwesome5 name="bolt" size={16} color={theme.primary} />
        <ThemedText>hi</ThemedText>
      </View>
      <View style={{ width: "50%", gap: 4, position: "absolute", left: "25%" }}>
        <ThemedText>Reminders Goals</ThemedText>
        <ProgressBar />
      </View>
    </View>
  );
};

export default ReminderScreenHeader;
