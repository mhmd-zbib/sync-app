import { useTheme } from "@/hooks/useColorScheme";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import GraphLabel from "./Graph-Labels";

interface BarGraphProps {
  data: number[];
  labels?: any[];
}

const BarGraph: React.FC<BarGraphProps> = ({ data, labels }) => {
  const theme = useTheme();

  // Calculate total of data
  const total = data.reduce((acc, item) => acc + item, 0);

  // Function to calculate average of the numbers inside the bars
  const calculateInnerAverage = () => {
    const count = data.length;
    if (count === 0) return 0;

    let innerTotal = 0;
    data.forEach((item) => {
      innerTotal += item;
    });
    return innerTotal / count;
  };

  const innerAverage = calculateInnerAverage();
  const maxValue = Math.max(...data);

  const [selectedBarIndex, setSelectedBarIndex] = useState<number | null>(null);

  const handlePressIn = (index: number) => {
    setSelectedBarIndex(index);
  };

  const handlePressOut = () => {
    setSelectedBarIndex(null);
  };

  const renderBars = () => {
    // Create a copy of data with indices for sorting
    const barsWithIndices = data.map((item, index) => ({ value: item, index }));

    // Sort bars by value in descending order
    barsWithIndices.sort((a, b) => b.value - a.value);

    return barsWithIndices.map(({ value, index }, idx) => {
      const aboveAverage = value > innerAverage + 10; // Adjust margin as needed
      const barType = aboveAverage ? theme.primary : theme.accent;
      const backgroundColor =
        selectedBarIndex === index
          ? theme.key
          : idx < 3
          ? theme.primary
          : theme.accent;

      return (
        <View key={index}>
          <GraphLabel value={value} isSelected={selectedBarIndex === index} />
          <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => handlePressIn(index)}
            onPressOut={handlePressOut}
            style={[
              styles.bar,
              {
                opacity:
                  selectedBarIndex === null || selectedBarIndex === index
                    ? 1
                    : 0.4,
                height: (value / maxValue) * 120 + 10,
                backgroundColor,
              },
            ]}
          />
        </View>
      );
    });
  };

  return (
    <View>
      <View style={styles.chart}>{renderBars()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  bar: {
    width: 35,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default BarGraph;
