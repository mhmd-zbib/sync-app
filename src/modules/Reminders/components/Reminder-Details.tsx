import details from "@/__test__/data/Remidner-Details.json";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { formatFullDateTime } from "@/utils/format-date";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const ReminderDetails = () => {
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  return (
    <View style={{ marginHorizontal: 10 }}>
      <ThemedText variant="accent">
        {formatFullDateTime(details.dueTo)}
      </ThemedText>
      <ThemedText size={20} style={{ fontWeight: "500" }}>
        {details.title}
      </ThemedText>
      <ThemedText variant="secondary">{details.details}</ThemedText>

      <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
        {details.tags.map((tag) => (
          <Link href={`contact/${tag.id}`} asChild>
            <ThemedText
              variant="secondary"
              style={{
                backgroundColor: theme.secondary,
                paddingVertical: 3,
                paddingHorizontal: 8,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: theme.accent,
                textAlign: "center",
                verticalAlign: "middle",
              }}>
              @ {tag.name}
            </ThemedText>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default ReminderDetails;
