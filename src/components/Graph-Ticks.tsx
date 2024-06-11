import { View, Text } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";

const GraphTicks = ({
  item,
  padding = 0,
}: {
  item: any[];
  padding?: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: padding,
        marginTop: 10,
      }}>
      {item.map((value, i) => (
        <View style={{ width: 30, alignItems: "center" }} key={i}>
          <ThemedText variant="accent">{value}</ThemedText>
        </View>
      ))}
    </View>
  );
};

export default GraphTicks;
