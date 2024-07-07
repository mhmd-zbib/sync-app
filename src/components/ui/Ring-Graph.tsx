import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface RingProgressProps {
  ratio: number; // Progress ratio (e.g., 0.75 for 75%)
}

const RingProgress: React.FC<RingProgressProps> = ({ ratio }) => {
  if (ratio < 0 || ratio > 1) {
    throw new Error("Ratio should be between 0 and 1 inclusive");
  }

  const radius = 70;
  const strokeWidth = 20;

  const percentage = ratio * 100;
  const circumference = 2 * Math.PI * radius;
  const progressValue = (circumference * percentage) / 100;
  const cx = radius + strokeWidth / 2;
  const cy = radius + strokeWidth / 2;

  const theme = useTheme();

  return (
    <View>
      <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={theme.accent}
          strokeWidth={strokeWidth}
          fill="none"
        />

        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={theme.key}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressValue}, ${circumference}`}
          fill="none"
          strokeLinecap="round"
        />

        {/* Position the text in the center of the circle */}
        <View
          style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <ThemedText style={{ fontWeight: "600" }} size={26}>
            {Math.round(ratio * 100)}%
          </ThemedText>
        </View>
      </Svg>
    </View>
  );
};

export default RingProgress;
