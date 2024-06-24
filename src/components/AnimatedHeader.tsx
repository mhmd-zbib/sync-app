/**
 * Animated Header, hides on scroll down and shows on scroll up
 */

import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { Animated, View } from "react-native";

interface AnimatedHeaderProps {
  scrollY: Animated.Value;
  headerHeight: number;
  children: React.ReactNode;
}

const AnimatedHeader = ({
  scrollY,
  headerHeight,
  children,
}: AnimatedHeaderProps) => {
  const theme = useTheme();

  const diffClamp = Animated.diffClamp(scrollY, 0, headerHeight);
  const translateY = diffClamp.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
  });

  return (
    <Animated.View
      style={{
        backgroundColor: theme.background,
        zIndex: 900,
        elevation: 900,
        transform: [{ translateY: translateY }],
        position: "absolute", // Change to absolute
        top: 0,
        left: 0,
        right: 0,
        width: "100%", // Ensure full width
      }}>
      <View>{children}</View>
    </Animated.View>
  );
};

export default AnimatedHeader;
