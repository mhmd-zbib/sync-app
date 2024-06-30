import React from "react";
import { View } from "react-native";
import ThemedText from "./ThemedText";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useColorScheme";

const EmptyList = ({
  message = "Nothing found here!",
}: {
  message?: string;
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}>
      <FontAwesome5 name="box-open" size={62} color={theme.accent} />
      <ThemedText size={16} style={{ fontWeight: "600" }} variant="accent">
        {message}
      </ThemedText>
    </View>
  );
};

export default EmptyList;
