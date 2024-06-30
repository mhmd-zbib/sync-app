import React from "react";
import { View } from "react-native";
import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import { StyleSheet } from "react-native";

interface BarLabelProps {
  value: number;
  isSelected: boolean;
}

const GraphLabel: React.FC<BarLabelProps> = ({ value, isSelected }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {isSelected && (
        <View style={styles.labelContainer}>
          <View
            style={[styles.labelBackground, { backgroundColor: theme.accent }]}>
            <ThemedText>{value}</ThemedText>
          </View>
          <View style={[styles.divider, { backgroundColor: theme.accent }]} />
        </View>
      )}
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
    flexDirection: "row",
    justifyContent: "center",
    width: 80,
  },
  divider: {
    width: 1,
    height: 20,
  },
});

export default GraphLabel;
