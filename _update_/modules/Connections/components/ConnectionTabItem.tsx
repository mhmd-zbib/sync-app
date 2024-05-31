import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { TouchableOpacity } from "react-native";

interface ConnectionTabItemProps {
  title: string;
  onPress: () => void;
  isActiveTab: boolean;
}

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
        paddingVertical: 10,
        borderRadius: 9,
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
