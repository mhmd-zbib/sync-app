import { useTheme } from "@/hooks/useColorScheme";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import GraphLabel from "./Graph-Labels";
import GraphTicks from "./Graph-Ticks";

interface BarGraphProps {
  data: number[];
  labels: any[];
}

const BarGraph: React.FC<BarGraphProps> = ({ data, labels }) => {
  const theme = useTheme();
  const maxValue = Math.max(...data.map((item) => item));

  const RenderBars = () => {
    const [selectedBarIndex, setSelectedBarIndex] = useState(null);

    const handlePressIn = (index: any) => {
      setSelectedBarIndex(index);
    };

    const handlePressOut = () => {
      setSelectedBarIndex(null);
    };

    const total = data.reduce((acc, item) => acc + item, 0);
    const average = total / data.length;
    const margin = 10;
    const bars = data.map((item, index) => {
      const aboveAverage = item > average + margin;
      const barType = aboveAverage ? theme.primary : theme.accent;
      const backgroundColor = selectedBarIndex === index ? theme.key : barType;

      return (
        <View key={index}>
          <GraphLabel value={item} isSelected={selectedBarIndex === index} />
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
                height: (item / maxValue) * 120,
                backgroundColor,
              },
            ]}
          />
        </View>
      );
    });
    return bars;
  };

  return (
    <View style={[styles.chart]}>
      <RenderBars />
      <GraphTicks item={labels} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  tick: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 20,
  },
  chart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  bar: {
    borderRadius: 6,
    width: 30,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default BarGraph;
