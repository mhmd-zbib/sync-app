import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../src/shared/components/ui/Typography";
import { useTheme } from "../src/shared/stores/themeStore";
import { FILTER_OPTIONS } from "./FILTER_OPTIONS";

const ConnectionOptionsTest = ({ setFilter }) => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState(FILTER_OPTIONS.Contacts);

  const selectOption = (option) => {
    setFilter(option);
    setSelectedOption(option);
  };

  const isSelected = (option) => {
    return option === selectedOption;
  };

  const selectedStyle = {
    backgroundColor: theme.primary,
    color: theme.background,
  };

  return (
    <View style={styles.container}>
      {Object.values(FILTER_OPTIONS).map((option) => (
        <Typography
          key={option}
          style={[
            styles.option,
            isSelected(option)
              ? selectedStyle
              : { borderColor: theme.accent, borderWidth: 1 },
          ]}
          onPress={() => selectOption(option)}>
          {option}
        </Typography>
      ))}
    </View>
  );
};

export default ConnectionOptionsTest;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    flexWrap: "wrap",
  },
  option: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 500,
  },
});
