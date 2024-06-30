import { View, Text } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";
import BackButton from "./BackButton";
import { useTheme } from "@/hooks/useColorScheme";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

// (property) header?: ((props: NativeStackHeaderProps) => React.ReactNode) | undefined

interface HeaderProps extends NativeStackHeaderProps {}

const NavHeader = ({ title, ...props }: { title: string }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.background,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
      }}>
      <BackButton />
      <ThemedText
        style={{
          height: 60,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}>
        {title}
      </ThemedText>
    </View>
  );
};

export default NavHeader;
