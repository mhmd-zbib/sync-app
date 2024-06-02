import { View, Text } from "react-native";
import React from "react";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import Separator from "@/components/Separator";

interface InfoContainerProps {
  title: string;
  children: React.ReactNode;
}

const InfoContainer = ({ title, children }: InfoContainerProps) => {
  const theme = useTheme();

  return (
    <ThemedView
      color="secondary"
      style={{ padding: 16, borderRadius: 16, gap: 10 }}>
      <ThemedText variant="accent" size={14}>
        {title}
      </ThemedText>
      <Separator />

      <View>{children}</View>
    </ThemedView>
  );
};

export default InfoContainer;
