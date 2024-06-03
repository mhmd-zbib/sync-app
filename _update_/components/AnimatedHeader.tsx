/**
 * Animated Header, hides on scroll down and shows on scroll up
 */

import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { Animated } from "react-native";

interface AnimatedHeaderProps {
  scrollY: Animated.Value;
  headerHeight?: number;
  children: React.ReactNode;
}

const AnimatedHeader = ({
  scrollY,
  headerHeight = 70,
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
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.background,
        zIndex: 900,
        elevation: 900,
        transform: [{ translateY: translateY }],
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: headerHeight,
        flex: 1,
      }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedHeader;
