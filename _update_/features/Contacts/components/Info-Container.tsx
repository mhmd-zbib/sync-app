import React from "react";
import { View } from "react-native";
import Separator from "@/components/Separator";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Card } from "@/components/Card";

interface InfoContainerProps {
  title: string;
  children?: React.ReactNode;
}

const InfoContainer = ({ title, children }: InfoContainerProps) => {
  console.log(children);

  return (
    <Card>
      <ThemedText variant="accent" size={14}>
        {title}
      </ThemedText>
      <Separator />

      {children}
    </Card>
  );
};

export default InfoContainer;
