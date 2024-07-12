import ThemedText from "@/components/ui/ThemedText";
import { usePathname } from "expo-router";
import React from "react";
import { View } from "react-native";

const NotFound = () => {
  const path = usePathname();

  return (
    <View>
      <ThemedText>you are on {path}</ThemedText>
    </View>
  );
};

export default NotFound;
