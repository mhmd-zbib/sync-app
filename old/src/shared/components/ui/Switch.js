import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/themeStore";
import Typography from "./Typography";
import { TouchableOpacity } from "react-native";

const SwitchButton = ({ isOn, title }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: isOn ? theme.textAccent : null,
        justifyContent: "center",
        borderRadius: 50,
        padding: 15,
        width: 140,
      }}>
      <Typography
        variant="lg"
        color={isOn ? theme.textPrimary : theme.textAccent}>
        {title}
      </Typography>
    </View>
  );
};

const Switch = ({ isOn, onText, offText, onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: theme.accent,
        flexDirection: "row",
        borderRadius: 500,
      }}>
      <SwitchButton isOn={isOn} title={onText} />
      <SwitchButton isOn={!isOn} title={offText} />
    </TouchableOpacity>
  );
};

export default Switch;

const styles = StyleSheet.create({});
