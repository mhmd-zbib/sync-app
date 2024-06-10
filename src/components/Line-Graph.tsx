import { useTheme } from "@/hooks/useColorScheme";
import * as d3 from "d3";
import React, { useState } from "react";
import { View } from "react-native";
import {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
  Svg,
  Text as SVGText,
} from "react-native-svg";
import { Label } from "./Graph-Labels";
import ThemedText from "./ThemedText";

type LineGraphProps = {
  data: number[];
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
    .domain([0, props.data.length - 1])
    .range([10, width - 10]);

  const lineFn = d3
    .line<number>()
    .x((d, ix) => xScale(ix))
    .y((d, iy) => yScale(d))
    .curve(d3.curveCatmullRom);

  const areaFn = d3
    .area<number>()
    .x((d, ix) => xScale(ix))
    .y0(height)
    .y1((d, iy) => yScale(d))
    .curve(d3.curveCatmullRom);

  const svgLine = lineFn(props.data) || "";
  const svgArea = areaFn(props.data) || "";

  const theme = useTheme();

  return (
    <View
      style={{ backgroundColor: "gray", flexDirection: "row" }}
      onLayout={(ev) => {
        setWidth(ev.nativeEvent.layout.width);
      }}>
      <View>
        <Svg width={width} height={height}>
          <Defs>
            <LinearGradient
              id="gradient"
              x1={"0%"}
              x2="0%"
              y1={"0%"}
              y2={"100%"}>
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

          {/* <View>
          {props.data.map((d, i) => (
            <Label
              key={i}
              x={xScale(i)}
              y={height} // Adjust the y position for label
              text={d}
              fontSize={12}
              color={theme.primary}
            />
          ))}
        </View> */}
        </Svg>

        <Svg height={30} width={width}>
          {props.data.map((d, i) => (
            <Label
              key={i}
              x={xScale(i)}
              y={15}
              text={d}
              fontSize={12}
              color={theme.primary}
            />
          ))}
        </Svg>
      </View>
    </View>
  );
}
