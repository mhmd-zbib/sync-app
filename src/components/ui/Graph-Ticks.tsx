import React from "react";
import { View } from "react-native";
import ThemedText from "./ThemedText";
import { useTheme } from "@/hooks/useColorScheme";

const GraphTicks = ({
  item,
  padding = 0,
}: {
  item: any[];
  padding?: number;
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: padding,
        marginTop: 10,
        borderColor: theme.accent,
      }}>
      {item.map((value, i) => (
        <View style={{ width: 30, alignItems: "center" }} key={i}>
          <ThemedText variant="accent" size={12}>
            {value}
          </ThemedText>
        </View>
      ))}
    </View>
  );
};

export default GraphTicks;
