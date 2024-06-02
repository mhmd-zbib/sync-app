/**
 * Tabs Buttons
 */

import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ConnectionTabItemProps } from "../../types/interfaces";

const ConnectionTabItem = ({
  title,
  onPress,
  isActiveTab,
}: ConnectionTabItemProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: isActiveTab ? theme.primary : theme.background,
        padding: 12,
        paddingVertical: 8,
        borderRadius: 500,
        borderWidth: 1,
        borderColor: isActiveTab ? "" : theme.subAccent,
      }}>
      <ThemedText variant={isActiveTab ? "background" : "accent"}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default ConnectionTabItem;
