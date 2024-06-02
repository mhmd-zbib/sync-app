import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import ThemedText from "@/components/ThemedText";

const ContactDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <ThemedText>{id}</ThemedText>
    </View>
  );
};

export default ContactDetails;
