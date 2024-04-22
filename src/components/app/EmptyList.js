import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../ui/text/Typography";
import { useTheme } from "../../stores/shared/themeStore";

const EmptyList = ({ title }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Typography color={theme.textSecondary}>No {title} are found!</Typography>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({});
