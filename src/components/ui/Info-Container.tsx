import { Card } from "@/components/ui/Card";
import Separator from "@/components/ui/Separator";
import ThemedText from "@/components/ui/ThemedText";
import { Link } from "expo-router";
import React from "react";
import { View, ViewProps } from "react-native";

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
    <Link href={href} asChild>
      <Card>
        <ThemedText variant="accent" size={14}>
          {title}
        </ThemedText>
        <Separator />
        <View {...view}>{children}</View>
      </Card>
    </Link>
  );
};

export default InfoContainer;
