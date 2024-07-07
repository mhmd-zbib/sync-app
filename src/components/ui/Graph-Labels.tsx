import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { StyleSheet, View } from "react-native";

interface GraphLabelProps {
  value: number;
  isSelected: boolean;
}

const GraphLabel: React.FC<GraphLabelProps> = ({ value, isSelected }) => {
  const theme = useTheme();

  if (!isSelected) return null;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <View
          style={[styles.labelBackground, { backgroundColor: theme.accent }]}>
          <ThemedText>{value}</ThemedText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  labelContainer: {
    alignItems: "center",
    zIndex: 500,
    position: "absolute",
    top: -60,
  },
  labelBackground: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
  triangle: {
    top: -21,
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 12.5,
    borderRightWidth: 12.5,
    borderBottomWidth: 25,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "45deg" }],
    position: "absolute",
    zIndex: -5,
  },
});

export default GraphLabel;
