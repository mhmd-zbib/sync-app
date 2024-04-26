import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../../stores/themeStore";
import { useNavigation } from "@react-navigation/native";

const GoBackButton = ({ onPress }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress ? onPress : () => navigation.goBack()}
      style={{
        alignSelf: "center",
        backgroundColor: theme.secondary,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
      }}>
      <Text>{"<"}</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({});
