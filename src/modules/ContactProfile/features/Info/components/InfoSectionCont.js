import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../shared/stores/themeStore";

const InfoSectionCont = ({ children, label, rightButton, style }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        paddingVertical: 24,
        gap: 16,
        paddingHorizontal: 10,
        borderBottomColor: theme.accent,
        borderBottomWidth: 1,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography color={theme.textSecondary} variant="sm" fontWeight={"600"}>
          {label}
        </Typography>
        <View>{rightButton}</View>
      </View>
      <View style={style}>{children}</View>
    </View>
  );
};

export default InfoSectionCont;

const styles = StyleSheet.create({});
