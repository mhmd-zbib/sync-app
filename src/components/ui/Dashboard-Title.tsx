import React from "react";
import { Text, View } from "react-native";
import ThemedText from "./ThemedText";
import { useTheme } from "@/hooks/useColorScheme";

const DashboardTitle = ({
  title,
  value,
  sub,
}: {
  title: string;
  value: any;
  sub?: string;
}) => {
  const theme = useTheme();
  return (
    <View>
      <ThemedText size={15} variant="secondary">
        {title}
      </ThemedText>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ThemedText style={{ fontWeight: "500" }} size={28}>
          {value}
        </ThemedText>

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
