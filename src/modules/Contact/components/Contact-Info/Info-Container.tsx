import { Card } from "@/components/Card";
import Separator from "@/components/Separator";
import ThemedText from "@/components/ThemedText";
import { Link } from "expo-router";
import React from "react";

interface InfoContainerProps {
  title: string;
  children?: React.ReactNode;
  href?: string;
}

const InfoContainer = ({ title, children, href = "" }: InfoContainerProps) => {
  return (
    <Link href={href} asChild>
      <Card>
        <ThemedText variant="accent" size={14}>
          {title}
        </ThemedText>
        <Separator />
        {children}
      </Card>
    </Link>
  );
};

export default InfoContainer;
