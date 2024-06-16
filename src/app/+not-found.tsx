import { View, Text } from "react-native";
import React from "react";
import { usePathname } from "expo-router";
import ThemedText from "@/components/ThemedText";

const NotFound = () => {
  const path = usePathname();

  return (
    <View>
      <ThemedText>you are on {path}</ThemedText>
    </View>
  );
};

export default NotFound;
