import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Button from "../../ui/buttons/Button";
import Typography from "../../ui/text/Typography";
import { useTheme } from "../../../stores/shared/themeStore";

const ReminderFrequency = () => {
  const theme = useTheme();
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  console.log(selectedFrequency);

  const frequencies = ["1w", "2w", "3w", "1m"];

  return (
    <View style={styles.container}>
      <Typography color={theme.textSecondary}>Reminder Frequency</Typography>
      <View style={styles.buttonContainer}>
        {frequencies.map((freq) => (
          <Button
            size="sm"
            key={freq}
            variant={selectedFrequency === freq ? "primary" : "secondary"}
            style={styles.button}
            title={freq}
            onPress={() => setSelectedFrequency(freq)}
          />
        ))}
      </View>
    </View>
  );
};

export default ReminderFrequency;

const styles = StyleSheet.create({
  container: { paddingBottom: 10 },
  buttonContainer: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
