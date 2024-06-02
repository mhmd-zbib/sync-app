import { View, Text } from "react-native";
import React from "react";
import ThemedText from "@/components/ThemedText";

interface ContactContainerProps {
  title: string;
  data: string;
}

const ContactContainer = ({ title, data }: ContactContainerProps) => {
  if (!data || data.length === 0) {
    return;
  }

  return (
    <View style={{ gap: 8 }}>
      <ThemedText variant="secondary">{title}</ThemedText>
      <ThemedText>{data}</ThemedText>
    </View>
  );
};

export default ContactContainer;
