import React from "react";
import { View } from "react-native";
import ThemedText from "./ThemedText";

const ScreenTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <View>
      <ThemedText size={24} style={{ fontWeight: "700" }}>
        {title}
      </ThemedText>
      {subtitle && <ThemedText variant="accent">{subtitle}</ThemedText>}
    </View>
  );
};

export default ScreenTitle;
