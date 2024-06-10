import React from "react";
import { Text } from "react-native-svg";

type LabelProps = {
  x: number;
  y: number;
  text: string | number;
  fontSize?: number;
  color?: string;
};

export function Label({
  x,
  y,
  text,
  fontSize = 12,
  color = "white",
}: LabelProps) {
  return (
    <Text x={x} y={y} fill={color} fontSize={fontSize} textAnchor="middle">
      {text}
    </Text>
  );
}
