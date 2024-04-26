import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../text/Typography";

const InfoCard = ({
  children,
  label,
  rightButton,
  bottomBorder = true,
  onPress,
  style,
  childStyle,
}) => {
  const theme = useTheme();

  return (
    <View
      activeOpacity={1}
      onPress={onPress}
      style={[
        {
          paddingHorizontal: 20,
          paddingVertical: 24,
          borderColor: theme.secondary,
          borderBottomWidth: bottomBorder ? 1 : null,
          gap: 16,
        },
        style,
      ]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography fontWeight={600} color={theme.textAccent} variant="sm">
          {label}
        </Typography>

        <Typography fontWeight={600} color={theme.textAccent}>
          {rightButton}
        </Typography>
      </View>

      <View style={childStyle}>{children}</View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({});
