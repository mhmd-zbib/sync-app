import ThemedText from "@/components/ui/ThemedText";
import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface RingProgressProps {
  progress: number;
  total: number;
  title?: string;
}

const RingProgress: React.FC<RingProgressProps> = ({
  progress,
  total,
  title,
}) => {
  if (total < progress) {
    throw new Error("Total should always be greater than or equal to progress");
  }
  const radius = 70;
  const strokeWidth = 30;

  const clampedProgress = Math.min(progress, total);
  const percentage = (clampedProgress / total) * 100;
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
          <ThemedText style={{ fontWeight: "600" }} size={20}>
            {title}
          </ThemedText>
          <ThemedText variant="secondary" size={14}>
            {progress} /{total}
          </ThemedText>
        </View>
      </Svg>
    </View>
  );
};

export default RingProgress;
