import { View, Text } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";

const DescriptionScreen = () => {
  const { id, description } = useLocalSearchParams();

  return (
    <View>
      <ThemedText>
        {id} , {description}
      </ThemedText>
    </View>
  );
};

export default DescriptionScreen;
