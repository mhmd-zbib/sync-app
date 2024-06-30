import ThemedText from "@/components/ui/ThemedText";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const Note = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <ThemedText>Note{id} </ThemedText>
    </View>
  );
};

export default Note;
