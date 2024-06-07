import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Line, Text, G, Circle } from "react-native-svg";
import ThemedText from "@/components/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";

interface DataItem {
  label: string;
  value: number;
}

interface LineChartProps {
  data: DataItem[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const theme = useTheme();
  const maxValue = Math.max(...data.map((item) => item.value));
  const screenWidth = Dimensions.get("window").width;
  const chartWidth = screenWidth;
  const chartHeight = 200;
  const marginLeft = 30;
  const marginBottom = 30;
  const xScale = (chartWidth - marginLeft) / (data.length - 1);
  const yScale = (chartHeight - marginBottom) / maxValue;

  const renderHorizontalAxisTick = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.horizontalTick}>
        <ThemedText size={12} variant="accent">
          {item.label}
        </ThemedText>
      </View>
    ));
  };

  const renderVerticalAxisTicks = () => {
    return (
      <View style={styles.tick}>
        <ThemedText>{maxValue}</ThemedText>
        <ThemedText>0</ThemedText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.verticalAxis}>{renderVerticalAxisTicks()}</View>
      <View style={{ flex: 1 }}>
        <Svg width={"100%"} height={chartHeight}>
          <G>
            {data.map((item, index) => (
              <Line
                key={index}
                x1={index * xScale}
                y1={chartHeight - item.value * yScale}
                x2={
                  index === data.length - 1
                    ? index * xScale
                    : (index + 1) * xScale
                }
                y2={
                  index === data.length - 1
                    ? chartHeight - item.value * yScale
                    : chartHeight - data[index + 1].value * yScale
                }
                stroke="blue"
                strokeWidth="2"
              />
            ))}
          </G>
          <G>
            {data.map((item, index) => (
              <Circle
                key={index}
                cx={index * xScale}
                cy={chartHeight - item.value * yScale}
                r={4}
                fill="blue"
              />
            ))}
          </G>
          <G>
            {data.map((item, index) => (
              <Text
                key={index}
                x={index * xScale}
                y={chartHeight}
                fill="black"
                fontSize="12"
                textAnchor="middle">
                {item.label}
              </Text>
            ))}
          </G>
        </Svg>
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
  horizontalTick: {
    width: 40,
    alignItems: "center",
  },
});

export default LineChart;
