import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Typography from "../src/shared/components/ui/Typography";
import { useTheme } from "../src/shared/stores/themeStore";

const options = ["Contacts", "Groups", "Starred", "Tagged"];
const ConnectionOptionsTest = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectOption = (option) => {
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
      {options.map((option, index) => (
        <Typography
          key={index}
          style={[
            styles.option,
            isSelected(option) && selectedStyle, // Apply selected style conditionally
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
    justifyContent: "space-between",
  },
  option: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 500,
    borderWidth: 1,
  },
});
