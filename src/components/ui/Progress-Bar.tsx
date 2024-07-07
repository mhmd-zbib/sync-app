import { View } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useColorScheme";
import { FlexStyle } from "react-native";

interface ProgressBarProps {
  progress?: number;
}

/**
 * ProgressBar Component
 *
 * Displays a horizontal progress bar with customizable styling and dynamic width based on progress percentage.
 *
 * @component
 * @param {number} [props.progress] - Optional. Progress percentage (0 to 100). Default is 0%.
 * @returns {JSX.Element} - Progress bar component
 */

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const theme = useTheme();

  // Calculate width of the progress bar based on progress percentage
  const progressBarWidth: FlexStyle["width"] = progress
    ? `${Math.min(Math.max(progress, 0), 100)}%`
    : "0%";

  return (
    <View
      style={{
        height: 8,
        width: "100%",
        backgroundColor: theme.accent,
        borderRadius: 200,
        overflow: "hidden",
      }}>
      <View
        style={{
          width: progressBarWidth,
          height: 8,
          borderRadius: 200,
          backgroundColor: theme.key,
        }}
      />
    </View>
  );
};

export default ProgressBar;
