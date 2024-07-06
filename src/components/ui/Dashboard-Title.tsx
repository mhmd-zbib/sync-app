import React from "react";
import { View } from "react-native";
import ThemedText from "./ThemedText";

const DashboardTitle = ({ title, value }: { title: string; value: any }) => {
  return (
    <View>
      <ThemedText size={15} variant="secondary">
        {title}
      </ThemedText>
      <ThemedText style={{ fontWeight: "500" }} size={28}>
        {value}
      </ThemedText>
    </View>
  );
};

export default DashboardTitle;
