import React from "react";
import { View, StyleSheet } from "react-native";
import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";

interface AxisProps {
  data: { label: string; value: number }[];
  isVertical?: boolean;
}

const Axis: React.FC<AxisProps> = ({ data, isVertical }) => {
  const theme = useTheme();
  const renderTicks = () => {
    return data.map((item, index) => (
      <View
        key={index}
        style={isVertical ? styles.tickVertical : styles.tickHorizontal}>
        <ThemedText>{item[isVertical ? "value" : "label"]}</ThemedText>
      </View>
    ));
  };

  return (
    <View
      style={
        isVertical ? styles.containerVertical : styles.containerHorizontal
      }>
      {renderTicks()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerVertical: {
    marginRight: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  containerHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  tickVertical: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  tickHorizontal: {
    width: 40,
    alignItems: "center",
  },
});

export default Axis;
