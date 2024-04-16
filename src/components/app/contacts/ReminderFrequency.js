import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../ui/buttons/Button";
import Typography from "../../ui/text/Typography";
import { useTheme } from "../../../stores/shared/themeStore";

const ReminderFrequency = () => {
  const theme = useTheme();

  return (
    <View style={{ gap: 10 }}>
      <Typography color={theme.textSecondary}>Reminder</Typography>

      <View style={{ flexDirection: "row", gap: 65 }}>
        <Button style={{ paddingHorizontal: 20 }} title={"1w"} />
      </View>
    </View>
  );
};

export default ReminderFrequency;

const styles = StyleSheet.create({});
