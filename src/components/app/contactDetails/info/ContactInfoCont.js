import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../../ui/text/Typography";
import { useTheme } from "../../../../stores/shared/themeStore";

const ContactInfoCont = ({
  children,
  label,
  rightLabel,
  border = true,
  style,
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        gap: 16,
        paddingVertical: 24,
        borderBottomWidth: border ? 1 : 0,
        borderColor: theme.accent,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography variant="sm" color={theme.textSecondary} fontWeight={"600"}>
          {label}
        </Typography>

        {rightLabel}
      </View>
      <View style={style}>{children}</View>
    </View>
  );
};

export default ContactInfoCont;

const styles = StyleSheet.create({});
