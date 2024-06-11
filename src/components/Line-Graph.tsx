import { useTheme } from "@/hooks/useColorScheme";
import * as d3 from "d3";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
  Svg,
  Text,
} from "react-native-svg";
import ThemedText from "./ThemedText";
import GraphLabel from "./Graph-Labels";
import GraphTicks from "./Graph-Ticks";

type LineGraphProps = {
  data: number[];
};

const GRAPH_ASPECT_RATIO = 9 / 16;

export function LineGraph(props: LineGraphProps) {
  const [isSelected, setIsSelected] = useState<any>(null);

  const [width, setWidth] = useState(0);
  const height = width * GRAPH_ASPECT_RATIO;

  const min = Math.min(...props.data);
  const max = Math.max(...props.data);

  const yBuffer = 0 * (max - min);

  const yScale = d3
    .scaleLinear()
    .domain([min, max + yBuffer])
    .range([height - 10, 10]);

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

  const rainbowColorScale = d3
    .scaleSequential(d3.interpolateRainbow)
    .domain([0, props.data.length - 1]);

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

        <Path
          d={svgLine}
          stroke={"white"}
          fill={"none"}
          strokeWidth={2}
          opacity={isSelected ? 0.4 : 1}
        />
        <Path d={svgArea} stroke={"none"} fill={"url(#gradient)"} />
      </Svg>

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

      {props.data.map((item, i) => (
        <View
          style={{
            left: xScale(i) - 30,
            top: yScale(item) - 30,
            position: "absolute",
            alignItems: "center",
          }}>
          <GraphLabel value={item} isSelected={isSelected === i} />

          <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => {
              setIsSelected(i);
            }}
            onPressOut={() => {
              setIsSelected(null);
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 50,
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.secondary,
                borderColor: isSelected
                  ? isSelected === i
                    ? theme.key
                    : theme.textAccent
                  : theme.primary,
              }}
            />
          </TouchableOpacity>
        </View>
      ))}
      <GraphTicks item={props.data} padding={-5} />
    </View>
  );
}
