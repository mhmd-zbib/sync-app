import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { StyleSheet, View } from "react-native";

interface BarGraphProps {
  data: { label: string; value: number }[];
}

const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  const theme = useTheme();
  const maxValue = Math.max(...data.map((item) => item.value));

  const renderVerticalAxisTicks = () => {
    return (
      <View style={styles.tick}>
        <ThemedText>{maxValue}</ThemedText>
        <ThemedText>0</ThemedText>
      </View>
    );
  };

  const renderHorizontalAxisTick = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.barContainer}>
        <ThemedText size={12} variant="accent">
          {item.label}
        </ThemedText>
      </View>
    ));
  };

  const renderBars = () => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    const average = total / data.length;
    const margin = 10;
    const bars = data.map((item, index) => {
      const aboveAverage = item.value > average + margin;
      const backgroundColor = aboveAverage ? theme.primary : theme.accent;

      return (
        <View key={index} style={styles.barContainer}>
          <View
            style={[
              styles.bar,
              {
                height: (item.value / maxValue) * 170,
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
    <View style={styles.container}>
      <View style={styles.verticalAxis}>{renderVerticalAxisTicks()}</View>
      <View style={{ flex: 1 }}>
        <View
          style={[
            styles.chart,
            {
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderColor: theme.accent,
            },
          ]}>
          {renderBars()}
        </View>
        <View style={styles.chart}>{renderHorizontalAxisTick()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  verticalAxis: {
    marginRight: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
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
  barContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 8,
  },
  bar: {
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    width: 32,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  horizontalTick: {
    width: 40,
    alignItems: "center",
  },
});

export default BarGraph;
