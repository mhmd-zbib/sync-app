import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { Text, View } from "react-native";
import ThemedText from "./ThemedText";

const DashboardTitle = ({
  title,
  value,
  sub,
  sideValue,
}: {
  title: string;
  value?: number;
  sub?: number;
  sideValue?: number;
}) => {
  const theme = useTheme();
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <ThemedText size={16} variant="secondary">
          {title}
        </ThemedText>
        {sideValue && <ThemedText size={20}>{sideValue}</ThemedText>}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {value && (
          <ThemedText style={{ fontWeight: "500" }} size={28}>
            {value}
          </ThemedText>
        )}

        {sub && (
          <Text style={{ color: theme.key }}>
            {" "}
            {"  "}+{sub}
          </Text>
        )}
      </View>
    </View>
  );
};

export default DashboardTitle;
