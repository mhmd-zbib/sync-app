import Separator from "@/components/Separator";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import React from "react";
import { View } from "react-native";

interface InfoContainerProps {
  title: string;
  children: React.ReactNode;
}

const InfoContainer = ({ title, children }: InfoContainerProps) => {
  if (!children || children.valueOf() === undefined) {
    return;
  }

  return (
    <ThemedView color="secondary" style={{ padding: 16, borderRadius: 16 }}>
      <ThemedText variant="accent" size={14}>
        {title}
      </ThemedText>
      <Separator />

      <View>{children}</View>
    </ThemedView>
  );
};

export default InfoContainer;
