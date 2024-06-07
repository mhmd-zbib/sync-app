import ThemedText from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

const GroupDescription = () => {
  const details =
    "When you sit down to write a design description, you need to be clear about what the end product should look like. The goal of a design description is not only to provide a high-level overview of the project but also to help the designer choose the right tools and techniques for creating it.";

  return (
    <View
      style={{
        flex: 1,
      }}>
      {details ? (
        <ThemedText>{details}</ThemedText>
      ) : (
        <ThemedText style={{ margin: "auto" }} size={16} variant="accent">
          Tap to add description!
        </ThemedText>
      )}
    </View>
  );
};

export default GroupDescription;
