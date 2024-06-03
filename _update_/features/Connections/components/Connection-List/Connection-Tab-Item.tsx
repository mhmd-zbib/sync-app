/**
 * Tabs Buttons
 */

import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ConnectionTabItemProps } from "../../types/interfaces";
import Button from "@/components/Button";

const ConnectionTabItem = ({
  title,
  onPress,
  isActiveTab,
}: ConnectionTabItemProps) => {
  const theme = useTheme();

  return (
    <Button
      onPress={onPress}
      title={title}
      variant={isActiveTab ? "primary" : "secondary"}
      rounded
    />
  );
};

export default ConnectionTabItem;
