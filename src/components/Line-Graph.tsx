import { View, Text } from "react-native";
import React, { useState } from "react";
import * as d3 from "d3";
import {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
  Svg,
} from "react-native-svg";
import { useTheme } from "@/hooks/useColorScheme";

type LineGraphProps = {
  data: number[];
  label: string;
  stat: string;
  color: string;
};

const GRAPH_ASPECT_RATIO = 9 / 16;

export function LineGraph(props: LineGraphProps) {
  const [width, setWidth] = useState(0);
  const height = width * GRAPH_ASPECT_RATIO;

  const min = Math.min(...props.data);
  const max = Math.max(...props.data);

  const yBuffer = 0.05 * (max - min);

  const yScale = d3
    .scaleLinear()
    .domain([min, max + yBuffer])
    .range([height, 0]);
  const xScale = d3
    .scaleLinear()
    .domain([0, props.data.length - 0.9])
    .range([0, width]);

  const lineFn = d3
    .line<number>()
    .x((d, ix) => xScale(ix))
    .y((d, iy) => yScale(d));
  // .curve(d3.curveBasis);

  const areaFn = d3
    .area<number>()
    .x((d, ix) => xScale(ix))
    .y0(height)
    .y1((d, iy) => yScale(d));

  const svgLine = lineFn(props.data) || "";
  const svgArea = areaFn(props.data) || "";

  const theme = useTheme();

  return (
    <View
      onLayout={(ev) => {
        setWidth(ev.nativeEvent.layout.width);
      }}>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="gradient" x1={"0%"} x2="0%" y1={"0%"} y2={"100%"}>
            <Stop offset={"0%"} stopColor={"white"} stopOpacity={0.3} />
            <Stop offset={"100%"} stopColor={"black"} stopOpacity={0} />
          </LinearGradient>
        </Defs>

        <Path d={svgLine} stroke={"white"} fill={"none"} strokeWidth={2} />
        <Path d={svgArea} stroke={"none"} fill={"url(#gradient)"} />

        {props.data.map((d, i) => (
          <Circle
            key={i}
            cx={xScale(i)}
            cy={yScale(d)}
            r={4}
            fill={theme.secondary}
            stroke={theme.primary}
            strokeWidth={2}
          />
        ))}
      </Svg>
    </View>
  );
}
