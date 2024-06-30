import Separator from "@/components/ui/Separator";
import ThemedText from "@/components/ui/ThemedText";
import React from "react";
import { View, ViewProps } from "react-native";
import Card from "./Card";

interface InfoContainerProps extends ViewProps {
  title: string;
  children?: React.ReactNode;
  href?: string;
}

const InfoContainer = ({
  title,
  children,
  href = "",
  ...view
}: InfoContainerProps) => {
  return (
    <Card href={href}>
      <ThemedText variant="accent" size={14}>
        {title}
      </ThemedText>
      <Separator />
      <View {...view}>{children}</View>
    </Card>
  );
};

export default InfoContainer;
