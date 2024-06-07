import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import * as shape from "d3-shape";

interface RingGraphProps {
  data: number[];
  radius: number;
}

const RingGraph: React.FC<RingGraphProps> = ({ data, radius }) => {
  const arcGenerator = shape
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 10);

  return (
    <View>
      <Svg height={radius * 2} width={radius * 2}>
        {data.map((item, index) => {
          const startAngle = 0;
          const endAngle = (item / 100) * Math.PI * 2;
          const arcPath = arcGenerator({ startAngle, endAngle });
          return (
            <Circle
              key={index}
              cx={radius}
              cy={radius}
              r={radius}
              fill="none"
              stroke="gray"
            />
          );
        })}
        {data.map((item, index) => {
          const startAngle = 0;
          const endAngle = (item / 100) * Math.PI * 2;
          const arcPath = arcGenerator({ startAngle, endAngle });
          return <Path key={index} d={arcPath} fill="blue" />;
        })}
      </Svg>
    </View>
  );
};

export default RingGraph;
